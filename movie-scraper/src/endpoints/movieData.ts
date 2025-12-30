import { Bool, OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { type AppContext, Movie, Provider } from "../types";
import { Providers } from "../Providers";
import getMovieData from "../corescraper";

export class MovieData extends OpenAPIRoute {
    schema = {
        tags: ["Movies"],
        summary: "Get all data about a movie",
        request: {
            params: z.object({
                movieName: Str({ description: "Movie name" }),
            }),
        },
        responses: {
            "200": {
                description: "Returns a single MovieData if found",
                content: {
                    "application/json": {
                        schema: z.object({
                            series: z.object({
                                success: Bool(),
                                result: z.object({
                                    movie: Movie,
                                }),
                            }),
                        }),
                    },
                },
            },
            "404": {
                description: "Movie not found",
                content: {
                    "application/json": {
                        schema: z.object({
                            series: z.object({
                                success: Bool(),
                                error: Str(),
                            }),
                        }),
                    },
                },
            },
        },
    };

    async handle(c: AppContext) {
        const data = await this.getValidatedData<typeof this.schema>();
        const { movieName } = data.params;

        // run scrapers in parallel with Promise.all; map preserves order
        const tasks = Providers.map((provider, idx) =>
            getMovieData(provider.name, idx, movieName)
                .catch(err => {
                    console.error("scraper error", provider.name, err);
                    return null; // keep slot but mark failed
                })
        );

        const results = await Promise.all(tasks);
        const movies = results.filter(Boolean) as z.infer<typeof Movie>[];

        return {
            success: true,
            movies,
        };
    }
}

import { Bool, OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { type AppContext, Movie, Provider } from "../types";

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
        // Get validated data
        const data = await this.getValidatedData<typeof this.schema>();

        // Retrieve the validated slug
        const { movieName } = data.params;
        const shortMovieName: string = movieName.split(" ")[0];

        // Implement your own object fetch here

        // fetch() here to get updated provider list every time
        const providers: typeof Provider[] = [];

        // array to store all results from scraping, storing movieModels
        let movieData: typeof Movie[] = [];

        providers.forEach((provider, idx) => {
            // call custom functions for each provider that fill in the information for a movieModel object
            // and add a new movieModel to the movieData array
        });
        // const exists = true;

        // // @ts-ignore: check if the object exists
        // if (exists === false) {
        //     return Response.json(
        //         {
        //             success: false,
        //             error: "Object not found",
        //         },
        //         {
        //             status: 404,
        //         }
        //     );
        // }

        return {
            success: true,
            movie: {
                title: movieName,
                preview_image: '',
                description: "this needs to be done",
                available: false,
                provider: '',
                link: ''
            },
        };
    }
}

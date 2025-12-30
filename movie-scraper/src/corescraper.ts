import { Movie } from "./types";
import { Providers } from "./Providers";
// import { Provider } from "./types";
// import z from "zod";
import * as scrapers from "./scrapers"; // uses src/scrapers/index.ts

type MovieType = typeof Movie._type;

async function withTimeout<T>(p: Promise<T>, ms = 5000): Promise<T | null> {
    return new Promise((resolve) => {
        const t = setTimeout(() => resolve(null), ms);
        p.then(r => { clearTimeout(t); resolve(r); }).catch(e => { clearTimeout(t); resolve(null); });
    });
}

export default async function getMovieData(
    provider: string,
    providerIndex: number,
    query: string
): Promise<MovieType> {
    const link: string = Providers[providerIndex].link;
    let responseData: Partial<MovieType> = {
        title: "Example Title",
        preview_image: "example.jpg",
        description: "An example movie.",
        available: true,
        provider,
        link,
    };

    const fn = (scrapers as any)[`get${provider}`] ?? undefined;
    if (typeof fn === "function") {
        const result = await withTimeout(fn(query), 7000); // null on timeout/error
        if (result) responseData = result;
    }

    // validate/normalize with your zod schema
    const moviedata: MovieType = Movie.parse({
        ...responseData,
        provider,
        link,
    });

    return moviedata;
}

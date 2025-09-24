import { Movie } from "./types";
import { Providers } from "./Providers";
import { Provider } from "./types";
// import z from "zod";

type MovieType = typeof Movie._type;

export default async function getMovieData(provider: string): Promise<MovieType> {

    const providerIndex = Providers.findIndex(p => p.name === provider);
    const link: string = Providers[providerIndex].link;
    
    // Example: fetch or construct the raw movie data object here
    const rawMovieData = {
        title: "Example Title",
        preview_image: "example.jpg",
        description: "An example movie.",
        available: true,
        provider: provider,
        link: link
    }

    

    // Validate and parse the data using the Movie schema
    const moviedata: MovieType = Movie.parse(rawMovieData);

    return moviedata;

}
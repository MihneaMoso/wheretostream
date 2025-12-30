import { Provider } from "./types";

type ProviderType = typeof Provider._type;

export const Providers: ProviderType[] = [
    { name: "Netflix", link: "https://www.netflix.com/" } ,
    { name: "Hulu", link: "https://www.hulu.com/" } ,
    { name: "DisneyPlus", link: "https://www.disneyplus.com/" } ,
    { name: "PrimeVideo", link: "https://www.primevideo.com/" } ,
    { name: "Tubi", link: "https://tubitv.com/" } ,
    { name: "HBOMax", link: "https://www.hbomax.com/" } ,
    { name: "Peacock", link: "https://www.peacocktv.com/" },
    { name: "AppleTVPlus", link: "https://tv.apple.com/" },
    {
        name: "ParamountPlus",
        link: "https://www.paramountplus.com/",
    } ,
    { name: "Crunchyroll", link: "https://www.crunchyroll.com/" } ,
];

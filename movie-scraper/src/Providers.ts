import { Provider } from "./types";

type ProviderType = typeof Provider._type;

export const Providers: ProviderType[] = [
    {
        name: "Netflix",
        link: "https://www.netflix.com",
    },
    {
        name: "Hulu",
        link: "https://www.hulu.tv"
    },
    
]
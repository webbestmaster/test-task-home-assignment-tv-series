export type ShowType = {
    id: number;
    image?: {medium: string; original: string};
    name: string;
    premiered?: string;
    rating?: {average?: number};
    summary?: string;
};

export type SearchApiResponseType = {
    score: number;
    show: ShowType;
};

export type UseSearchApiType = {
    error: Error | null;
    isInProgress: boolean;
    showList: Array<ShowType>;
};

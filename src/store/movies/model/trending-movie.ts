export interface TrendingMovie {
    video: boolean;
    vote_average: number;
    overview: string;
    release_date: string;
    vote_count: number;
    adult: boolean;
    backdrop_path: string;
    title: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    poster_path: string;
    popularity: number;
    media_type: string;
}
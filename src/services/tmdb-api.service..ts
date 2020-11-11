import axios, { AxiosResponse } from 'axios';

// Config (look to extract this...)
const baseUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = '8921023f13ed330d14aab82341690b6d';
const language: string = 'en-US'

// Ressources URLs
const movieResourceUrl: string = '/movie';
const searchResourceUrl: string = '/search';

// Axios instance
const instance = axios.create({
    baseURL: baseUrl
});
instance.defaults.params = {};
instance.defaults.params['api_key'] = apiKey;
instance.defaults.params['language'] = language;

// Endpoints
export const getUpcomingMovies = (): Promise<AxiosResponse> => {
    return instance.get(`${baseUrl}${movieResourceUrl}/upcoming`);
}

export const searchMulti = (keyword: string): Promise<AxiosResponse> => {
    return instance.get(`${baseUrl}${searchResourceUrl}/multi?query=${keyword}`);

}

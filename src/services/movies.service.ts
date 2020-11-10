import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = '8921023f13ed330d14aab82341690b6d';
const language: string = 'en-US'
const resourceUrl: string = '/movie';

const instance = axios.create({
    baseURL: baseUrl
});
instance.defaults.params = {};
instance.defaults.params['api_key'] = apiKey;
instance.defaults.params['language'] = language;

export const getUpcomingMovies = (): Promise<AxiosResponse> => {
    return instance.get(`${baseUrl}${resourceUrl}/upcoming`);
}

import axios, { AxiosInstance } from 'axios';

export default class BaseService {
    public baseUrl: string = 'https://api.themoviedb.org/3';
    public apiKey: string = '8921023f13ed330d14aab82341690b6d';
    public region: string = 'CA';
    public language: string = 'en-US'

    public instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl
        });
        this.instance.defaults.params = {};
        this.instance.defaults.params['api_key'] = this.apiKey;
        this.instance.defaults.params['language'] = this.language;
        this.instance.defaults.params['region'] = this.region;
    }
}
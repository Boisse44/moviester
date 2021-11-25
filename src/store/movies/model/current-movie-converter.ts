import { CrewJob } from './crew-job';
import { CurrentMovie } from './current-movie';
import { VideoType } from './video-type';


export const convert = (currentMovie): CurrentMovie => {
    return {
        title: currentMovie.original_title,
        background: getBackground(currentMovie.images),
        trailer: getTrailer(currentMovie.videos),
        tagline: currentMovie.tagline,
        overview: currentMovie.overview,
        runtime: currentMovie.runtime,
        director: getDirector(currentMovie.credits.crew),
        cast: currentMovie.credits.cast,
        release_year: currentMovie.release_date.split('-')[0],
        genres: currentMovie.genres,
        vote_average: currentMovie.vote_average


    }
}

const getBackground = (images) => {
    return images.backdrops.length > 0
        ? images.backdrops[0].file_path
        : '';
}

const getTrailer = (videos) => {
    return videos.results.length > 0 
        ? videos.results.find(video => video.type === VideoType.Trailer)?.key
        : '';
}

const getDirector = (crew) => {
    return crew
        .find(member => member.job === CrewJob.Director)?.name;
}
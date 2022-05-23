import { useEffect, useState } from "react"
import MovieDataService from "../data/MovieDataService"
import { Cast, Credits } from "../model/Credits";
import { MovieComplete } from "../model/Movie"

interface MovieDetails {
    isLoading: boolean;
    movieComplete?: MovieComplete;
    cast: Cast[];

}

export const UseMovieDetails = ( movieId: number) => {
    
    const [movieComplete, setMovieComplete] = useState<MovieDetails>({
        isLoading: true,
        movieComplete: undefined,
        cast: []
    });

    const getMovieDetails = async() => {

        const movieDetailsPromise = MovieDataService.get<MovieComplete>(`/${ movieId }`);
        const movieCreditsPromise = MovieDataService.get<Credits>(`/${ movieId }/credits`);
    
        const [ movieDetails, movieCredits ] = await Promise.all([
            movieDetailsPromise,
            movieCreditsPromise
        ]);

        setMovieComplete({
            isLoading: false,
            movieComplete: movieDetails.data,
            cast: movieCredits.data.cast
        });
    } 

    useEffect(() => {
       getMovieDetails();
    }, [])
    
    return{
       ...movieComplete
    }

}

import React, { useEffect, useState } from 'react'
import MovieDataService from '../data/MovieDataService'
import { Movie, Movies } from '../model/Movie'

interface MoviesState {
    nowMovies: Movie[];
    popularMovies: Movie[];
    topMovies: Movie[];
    upcomingMovies: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MoviesState>({
        nowMovies: [],
        popularMovies:  [],
        topMovies:      [],
        upcomingMovies: [],
    });

    const getMovies = async () => {

        const nowMoviesPromise     = MovieDataService.get<Movies>('/now_playing');
        const popularMoviesPromise  = MovieDataService.get<Movies>('/popular');
        const topMoviesPromise      = MovieDataService.get<Movies>('/top_rated');
        const upcomingMoviesPromise =  MovieDataService.get<Movies>('/upcoming');

        const response = await Promise.all([
            nowMoviesPromise,
            popularMoviesPromise,
            topMoviesPromise,
            upcomingMoviesPromise
        ]);

        setMovieState({
            nowMovies: response[0].data.results,
            popularMovies:  response[1].data.results,
            topMovies: response[2].data.results,
            upcomingMovies: response[3].data.results
    });
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

  return {
    ...movieState,
    isLoading

  }
}


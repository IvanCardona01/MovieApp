import axios from "axios";

const MovieDataService = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'bc8129d4aeb56e9f7dda3b30174ab9a1',
        language: 'es-ES'
    }

});

export default MovieDataService;
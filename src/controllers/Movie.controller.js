import { Movie } from "../models/Movie.model.js";

let movies= []

const registrationMovie = (name, description) => {
    let movie = new Movie(name, description);
    movies.push(movie);
    return movie;
}

const getAllMovies = () => {
    return movies;
}

export {registrationMovie, getAllMovies};
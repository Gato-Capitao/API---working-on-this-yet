import { Router } from "express";
import { registrationMovie, getAllMovies } from "../controllers/Movie.controller.js";

const MovieRouter = Router();
MovieRouter.post("/movies", (req, res) => {
    const { name, description } = req.body;
    const newMovie = registrationMovie(name, description);
    res.json({
        message: "Movie was sucessfuly added.",
        newMovie: newMovie
    });
});

MovieRouter.get("/movies", (req, res) => {
    const list = getAllMovies();
    res.json({ list });
});

export {MovieRouter}
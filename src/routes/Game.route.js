import { Router } from "express";
import { registrationGame, getAllGames } from "../controllers/Game.controller.js";

const GameRouter = Router();
GameRouter.post("/games", (req, res) => {
    const { name, description } = req.body;
    const newGame = registrationGame(name, description);
    res.json({
        message: "Game was sucessfuly added.",
        newGame: newGame
    });
});

GameRouter.get("/games", (req, res) => {
    const list = getAllGames();
    res.json({ list });
});

export {GameRouter}
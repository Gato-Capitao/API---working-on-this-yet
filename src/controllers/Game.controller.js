import { Game } from "../models/Game.model.js";

let games = []

const registrationGame = (name, description) => {
    let game = new Game(name, description);
    games.push(game);
    return game;
}

const getAllGames = () => {
    return games;
}

export {registrationGame, getAllGames};
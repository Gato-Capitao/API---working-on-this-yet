import { Router } from "express";
import { registrationBook, getAllBooks } from "../controllers/Book.controller.js";

const BookRouter = Router();
BookRouter.post("/books", (req, res) => {
    const { name, description } = req.body;
    const newBook = registrationBook(name, description);
    res.json({
        message: "Book was sucessfuly added.",
        newBook: newBook
    });
});

BookRouter.get("/books", (req, res) => {
    const list = getAllBooks();
    res.json({ list });
});

export {BookRouter}
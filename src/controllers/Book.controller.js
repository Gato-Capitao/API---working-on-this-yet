import { Book } from "../models/Book.model.js";

let books = []

const registrationBook = (name, description) => {
    let book = new Book(name, description);
    books.push(book);
    return book;
}

const getAllBooks = () => {
    return books;
}

export {registrationBook, getAllBooks};
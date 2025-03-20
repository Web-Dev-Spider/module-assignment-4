const bookRouter = require("express").Router();

const { addNewBook, getAllBooks, deleteBookByTitle, getBookByTitle } = require("../controllers/bookController");

bookRouter.get("/", getAllBooks);
bookRouter.post("/", addNewBook);
bookRouter.delete("/:title", deleteBookByTitle);
bookRouter.get("/:title", getBookByTitle);

module.exports = bookRouter;

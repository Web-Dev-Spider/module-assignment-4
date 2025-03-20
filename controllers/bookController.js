const books = require("../data/bookData");

//Get all books
const getAllBooks = (req, res, next) => {
  res.status(200).json({ success: true, data: books });
};

//Add new book
const addNewBook = (req, res, next) => {
  const { title, author, genre, year } = req.body;
  console.log(title, author, genre);
  if (!title || !author || !genre || !year) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const newBook = {
    id: books[books.length - 1].id + 1,
    title,
    author,
    year,
  };

  books.push(newBook);
  console.log(newBook);
  res.status(200).json({ success: true, data: { newBook, books } });
};

// Delete book by title
const deleteBookByTitle = (req, res, next) => {
  //   console.log("helllo deleting books");
  console.log(req.params);
  const title = req.params.title;

  if (!title) {
    return res.status(400).json({ success: false, message: "Title is requred to delete the book" });
  }

  const bookIndex = books.findIndex((index) => index.title === title);

  console.log("Boook index", bookIndex);
  if (bookIndex == -1) {
    return res.status(404).json({ success: false, message: "Book is not available to delete" });
  }

  deletedBook = books.splice(bookIndex, 1);
  res
    .status(200)
    .json({ success: true, message: `The book with title  '${title}' has been deleted`, deletedBook: deletedBook });
};

const getBookByTitle = (req, res, next) => {
  const title = req.params.title;
  console.log(title);
  if (!title) {
    return res.status(400).json({ success: false, message: "Title is requrired to get the book" });
  }

  const receivedBook = books.filter((book) => book.title === title);
  console.log("receivedBook", receivedBook);
  if (receivedBook.length === 0) {
    return res.status(404).json({ success: false, message: `The book with title '${title}' is not available` });
  }

  res.status(200).json({ success: true, data: { receivedBook } });
};

module.exports = { addNewBook, getAllBooks, deleteBookByTitle, getBookByTitle };

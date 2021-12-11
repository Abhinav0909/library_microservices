const BooksModal = require("../modals/books");
exports.BookController = async ({ title, author, noOfPages, publisher }) => {
  const data = await BooksModal.find({ title: title });
  if (data.length === 0) {
    let new_book = await BooksModal.create({
      title: title,
      author: author,
      noOfPages: noOfPages,
      publisher: publisher,
    });
    return new_book;
  } else {
    return null;
  }
};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BooksSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  noOfPages: {
    type: Number,
    require: false,
  },
  publisher: {
    type: String,
    require: false,
  },
});
const BooksModel = mongoose.model("books", BooksSchema);
module.exports = BooksModel;

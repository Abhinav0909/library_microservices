const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const morgan = require("morgan");
const BooksService = require("./router/books");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Error connecting to db");
    else console.log("DB Connected Successfully");
  }
);
app.use("/collections", BooksService);
app.listen(port, () => console.log(`Server is running on ${port}`));

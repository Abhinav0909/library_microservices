const express = require("express");
const router = express.Router();
const { validateBooks } = require("../validation");
const { BookController } = require("../controller/books");
router.get("/", (req, res) => {
  res.send("This is a book service");
});
router.post("/book", async (req, res) => {
  try {
    const { value, error } = validateBooks.validate(req.body);
    if (error) {
      throw {
        status: 422,
        message: "Validation error",
      };
    } else {
      const val = await BookController(value);
      if (val !== null) {
        res.status(201).json({
          message: "Created a book",
        });
      } else {
        res.status().json({
          message: "Book doesn't exist in our library",
        });
      }
    }
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Internal error occured",
    });
  }
});
module.exports = router;

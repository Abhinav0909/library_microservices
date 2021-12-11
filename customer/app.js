const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.port || 8000;
const Abhinav = require('./router/customer'); 
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Cannot connect to server ");
    else console.log("DB Connected Successfully");
  }
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan("dev"));
app.use("/",Abhinav);
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const roomRoute = require("./routes/room");
const blogRouter = require("./routes/blogRouter");

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.db_username}:${process.env.db_password}@bme-admin.5yuf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );

    console.log("mongoose connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDb();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/rooms", roomRoute);

app.use("/api/blogs", blogRouter);

// app.listen(port, () =>
//   console.log(`server started on port ${process.env.port || 8000}`)
// );

app.listen(process.env.port || 8000);

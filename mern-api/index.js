const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectMongo = require("./config/mongo");
connectMongo();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const postRouter = require("./src/routes/post.router.js");
const commentRouter = require("./src/routes/comment.router.js");
const bookingRouter = require("./src/routes/booking.router.js");

app.use("/api", postRouter);
app.use("/api", commentRouter);
app.use("/api", bookingRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

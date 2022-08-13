/** @format */

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const emailroute = require("./routes/message");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
dotenv.config();

port = process.env.PORT;

app.use("/", emailroute);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

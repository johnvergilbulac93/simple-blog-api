const env = require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("../routes/api");

app.use("/images", express.static("images"));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static('images'))
app.use("/api/blog", routes);

app.listen(process.env.APP_PORT, () => {
  console.log("Listening to port", process.env.APP_PORT);
});

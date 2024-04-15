const cors = require("cors");
const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 3000;

// all models
require("./models/index.js");

// index file for all routes
app.use("/", require("./routes/index.js"));

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

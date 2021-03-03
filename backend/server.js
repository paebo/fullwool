const express = require("express");
const path = require("path");

const index = require("./api/routes/index.js");

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", index);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

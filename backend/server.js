const express = require("express");
const index = require("./api/routes/index");
const app = express();

app.use("/", index);

const PORT = process.env.PORT || 8088;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

module.exports = app;
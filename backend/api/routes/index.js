const express = require("express");
//const uuid = require("uuid");
const router = express.Router();

router.get("/fullwool", (req, res) => {
  res.send("<h2>Hello FullWool</h2>");
});

module.exports = router;

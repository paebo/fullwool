const express = require("express");
//const uuid = require("uuid");
const router = express.Router();

router.get("/fullwool", (req, res) => {
  res.send(["Hello FullWool"]);
});

module.exports = router;

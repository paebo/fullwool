const express = require("express"); 
const router = express.Router();
const db = require("../../queries");

router.get("/", (req, res) => {
    
});

router.get("/about", db.getAbout);

module.exports = router;
const express = require("express"); 
const router = express.Router();
const db = require("../../queries");

router.get("/", (req, res) => {
    
});

router.get("/about", db.getAbout);

router.put("/about", (req, resp) => {
    const result = db.updateAbout();
    resp.status(200).send(result);
});

module.exports = router;
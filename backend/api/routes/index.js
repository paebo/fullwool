const express = require("express"); 
const router = express.Router();

router.get("/", (req, res) => {
    res.send("UNION ALL/kiskacsa")
})

module.exports = router;
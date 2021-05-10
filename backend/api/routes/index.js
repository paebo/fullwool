const express = require("express");
const router = express.Router();
const db = require("../../queries");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

router.get("/", (req, res) => {});

router.get("/about", cors(corsOptions), db.getAbout);

/*router.put("/about", (req, resp) => {
  const result = db.updateAbout();
  resp.status(200).send(result);
});
*/
module.exports = router;

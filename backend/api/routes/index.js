const express = require("express");
const router = express.Router();
const db = require("../../model/queries");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

router.get("/", (req, res) => {});

router.get("/about", cors(corsOptions), db.getAbout);

router.get("/gallery", cors(corsOptions), db.getAllGalleryItems);

router.get("/contact", cors(corsOptions), db.getContactInfo);

router.get("/blog", cors(corsOptions), db.getBlogPosts);

router.get("/courses", cors(corsOptions), db.getActiveCourses);

router.get("/shop", cors(corsOptions), db.getShopItems);
/*router.put("/about", (req, resp) => {
  const result = db.updateAbout();
  resp.status(200).send(result);
});
*/
module.exports = router;

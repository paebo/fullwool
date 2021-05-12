const express = require("express");
const router = express.Router();
const db = require("../../model/queries");
const cors = require("cors");
const service = require("../../services/service");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

router.get("/", (req, res) => {});

router.get("/about", cors(corsOptions), service.getAboutPageData);

router.get("/gallery", cors(corsOptions), service.getGalleryData);

router.get("/contact", cors(corsOptions), service.getContactData);

router.get("/blog", cors(corsOptions), service.getBlogPosts);

router.get("/courses", cors(corsOptions), db.getActiveCourses);

router.get("/shop", cors(corsOptions), db.getShopItems);
/*router.put("/about", (req, resp) => {
  const result = db.updateAbout();
  resp.status(200).send(result);
});
*/
module.exports = router;

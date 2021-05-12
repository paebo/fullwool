const db = require("../model/queries");
const { response } = require("express");


const getAboutPageData = async (req, resp) => {
    try {
        aboutData = await db.getAbout();
        resp.send({ aboutData });
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAboutPageData
}
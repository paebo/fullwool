const db = require("../model/queries");
const { response } = require("express");


const getAboutPageData = async (req, resp) => {
    try {
        aboutData = await db.getAbout();
        resp.send({ aboutData });
    } catch (error) {
        return { error };
    }
}

const getGalleryData = async (req, resp) => {
    try {
        gallery = await db.getAllGalleryItems();
        resp.send({ gallery });
    } catch (error) {
        return { error };
    }
}

module.exports = {
    getAboutPageData,
    getGalleryData,
}
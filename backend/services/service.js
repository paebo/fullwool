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

const getContactData = async (req, resp) => {
    try {
        contactInformation = await db.getContactInfo();
        resp.send({ contactInformation });
    } catch (error) {
        return { error };
    }
}

const getBlogPosts = async (req, resp) => {
    try {
        posts = await db.getBlogPosts();
        resp.send({ posts })
    } catch (error) {
        return { error };
    }
}

module.exports = {
    getAboutPageData,
    getGalleryData,
    getContactData,
    getBlogPosts,
}
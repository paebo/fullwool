const { response } = require("express");
const { Pool } = require("pg");
const format = require("pg-format");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const updateAbout = (req, resp) => {
  const { bio, image } = { bio: "Another ANOTHER bio", image: "file.jpg" };
  try {
    pool.query(
      format("UPDATE about SET bio = \'%s\', img = \'%s\' WHERE id = 1", bio, image)
    );
    return { success: true };
  } catch (error) {
    return { error };
  }
};

const getAbout = async () => {
  try {
    results = await pool.query("SELECT * FROM about");
    return { results }
  } catch (error) {
    return { error };
  }
};

const getAllGalleryItems = async () => {
  try {
    galleryItems = await pool.query(
      format("SELECT * FROM gallery ORDER BY id DESC")
    );
    return { galleryItems };
  } catch (error) {
    return { error };
  }
}

const getAllGalleryCategories = async () => {
  try{
    items = await pool.query(
      format("SELECT DISTINCT category FROM gallery")
    );
    return { items };
  }catch (error) {
    return { error };
  }
}


const getContactInfo = async () => {
    try {
      contactInfo = await pool.query(
        format("SELECT * FROM contact")
      );
      return { contactInfo };
    } catch (error) {
      return { error };
  }
}

const getBlogPosts = async () => {
  try {
    blogPosts = await pool.query(
      format("SELECT * FROM post ORDER BY id DESC")
    );
    return { blogPosts };
  } catch (error) {
    return { error };
  }
}

const getActiveCourses = async () => {
  try {
    activeCourses = await pool.query(
      format("SELECT * FROM course ORDER BY course_date DESC")
    );
    return { activeCourses };
  } catch (error) {
    return { error };
  }
}

const getShopItems = async () => {
  try {
    // TODO: discuss if quantity column should be necessary for the shop table(still up to debate)
    shopItems = await pool.query(
      format("SELECT * FROM shop")
    );
    return { shopItems };
  } catch (error) {
    return { error };
  }
}

module.exports = { 
  updateAbout,
  getAbout,
  getAllGalleryItems,
  getAllGalleryCategories,
  getContactInfo,
  getBlogPosts,
  getActiveCourses,
  getShopItems
};

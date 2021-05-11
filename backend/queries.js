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
      format("UPDATE about SET bio = '%s', img = '%s' WHERE id = 1", bio, image)
    );
    return { success: true };
  } catch (error) {
    return { error };
  }
};

const getAbout = (req, resp) => {
  results = pool.query("SELECT * FROM about", (error, results) => {
    if (error) {
      throw error;
    }
    resp.status(200).json(results.rows);
  });
};

const getAllGalleryItems = (req, resp) => {
  // TODO: decide if we should use format method for SELECT statements 
  try {
    galleryItems = pool.query(
      format("SELECT * FROM gallery ORDER BY id DESC")
    );
    return { galleryItems };
  } catch (error) {
    return { error };
  }
}

const getContactInfo = () => {
    try {
      // TODO: ask if a separate table is necessary for this
      contactInfo = pool.query(
        format("SELECT * FROM contact")
      );
      return { contactInfo };
    } catch (error) {
      return { error };
  }
}

const getBlogPosts = () => {
  try {
    blogPosts = pool.query(
      format("SELECT * FROM post ORDER BY id DESC")
    );
    return { blogPosts };
  } catch (error) {
    return { error };
  }
}

const getActiveCourses = () => {
  try {
    // TODO: create db table "courses", need to discuss specifics
    activeCourses = pool.query(
      format("SELECT * FROM courses WHERE is_active = TRUE LIMIT 30")
    );
    return { activeCourses };
  } catch (error) {
    return { error };
  }
}

const getShopItems = () => {
  try {
    // TODO: discuss if quantity column should be necessary for the shop table
    shopItems = pool.query(
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
  getContactInfo,
  getBlogPosts,
  getActiveCourses,
  getShopItems
};

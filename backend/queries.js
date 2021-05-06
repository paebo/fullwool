const { response } = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});

const saveAbout = (req, response) => {
    const bio = 'Hi my name is John'
    const image = 'https://p1.akcdn.net/full/657564003.kreativ-kreativ-pamut-polofonal-nagy-gombolyag-szurke-kreativ-441.jpg'
    pool.query(`
        INSERT INTO about (bio, img) 
        VALUES (${bio}, ${image})`);
};

const getAbout = (req, response) => {
    results = pool.query(`SELECT * FROM about`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

module.exports = {saveAbout, getAbout};
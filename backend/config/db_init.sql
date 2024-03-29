DROP DATABASE IF EXISTS fullwool;
CREATE DATABASE fullwool;
\c fullwool
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS gallery;
DROP TABLE IF EXISTS shop;
DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS course;


CREATE TABLE account
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    pw VARCHAR(255)
);

CREATE TABLE post
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    msg TEXT,
    account_id INT,
    CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(id)
);

CREATE TABLE about
(
    id SERIAL PRIMARY KEY,
    bio TEXT,
    img VARCHAR(255)
);

CREATE TABLE gallery
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    category VARCHAR(30),
    img VARCHAR
);

CREATE TABLE shop
(
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    price INT,
    details TEXT,
    img VARCHAR
);

CREATE TABLE contact
(
    id SERIAL PRIMARY KEY,
    phone VARCHAR(15),
    email VARCHAR(30),
    company_address VARCHAR 
);

CREATE TABLE course
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    details TEXT,
    course_date DATE,
    is_active BOOLEAN
);
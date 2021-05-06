DROP DATABASE IF EXISTS fullwool;
CREATE DATABASE fullwool;
\c fullwool
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS gallery;
DROP TABLE IF EXISTS shop;


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
)
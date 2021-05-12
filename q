[1mdiff --git a/backend/api/routes/index.js b/backend/api/routes/index.js[m
[1mindex 31a6dad..ecb7144 100644[m
[1m--- a/backend/api/routes/index.js[m
[1m+++ b/backend/api/routes/index.js[m
[36m@@ -1,6 +1,5 @@[m
 const express = require("express");[m
 const router = express.Router();[m
[31m-const db = require("../../model/queries");[m
 const cors = require("cors");[m
 const service = require("../../services/service");[m
 [m
[36m@@ -19,9 +18,9 @@[m [mrouter.get("/contact", cors(corsOptions), service.getContactData);[m
 [m
 router.get("/blog", cors(corsOptions), service.getBlogPosts);[m
 [m
[31m-router.get("/courses", cors(corsOptions), service.getActiveCourses);[m
[32m+[m[32mrouter.get("/courses", cors(corsOptions), service.getCourses);[m
 [m
[31m-router.get("/shop", cors(corsOptions), db.getShopItems);[m
[32m+[m[32mrouter.get("/shop", cors(corsOptions), service.getShopItems);[m
 /*router.put("/about", (req, resp) => {[m
   const result = db.updateAbout();[m
   resp.status(200).send(result);[m
[1mdiff --git a/backend/model/queries.js b/backend/model/queries.js[m
[1mindex 81948c2..764e1c5 100644[m
[1m--- a/backend/model/queries.js[m
[1m+++ b/backend/model/queries.js[m
[36m@@ -68,7 +68,7 @@[m [mconst getBlogPosts = async () => {[m
 const getActiveCourses = async () => {[m
   try {[m
     activeCourses = await pool.query([m
[31m-      format("SELECT * FROM courses WHERE is_active = TRUE LIMIT 30")[m
[32m+[m[32m      format("SELECT * FROM course")[m
     );[m
     return { activeCourses };[m
   } catch (error) {[m
[36m@@ -76,10 +76,10 @@[m [mconst getActiveCourses = async () => {[m
   }[m
 }[m
 [m
[31m-const getShopItems = () => {[m
[32m+[m[32mconst getShopItems = async () => {[m
   try {[m
     // TODO: discuss if quantity column should be necessary for the shop table(still up to debate)[m
[31m-    shopItems = pool.query([m
[32m+[m[32m    shopItems = await pool.query([m
       format("SELECT * FROM shop")[m
     );[m
     return { shopItems };[m
[1mdiff --git a/backend/server.js b/backend/server.js[m
[1mindex b204c47..3559022 100644[m
[1m--- a/backend/server.js[m
[1m+++ b/backend/server.js[m
[36m@@ -4,6 +4,6 @@[m [mconst app = express();[m
 [m
 app.use("/", index);[m
 [m
[31m-const PORT = process.env.PORT || 8081;[m
[32m+[m[32mconst PORT = process.env.PORT || 8088;[m
 [m
 app.listen(PORT, () => console.log(`Server running on ${PORT}`));[m
[1mdiff --git a/backend/services/service.js b/backend/services/service.js[m
[1mindex aa3352c..fd3640c 100644[m
[1m--- a/backend/services/service.js[m
[1m+++ b/backend/services/service.js[m
[36m@@ -32,16 +32,25 @@[m [mconst getContactData = async (req, resp) => {[m
 const getBlogPosts = async (req, resp) => {[m
     try {[m
         posts = await db.getBlogPosts();[m
[31m-        resp.send({ posts })[m
[32m+[m[32m        resp.send({ posts });[m
     } catch (error) {[m
         return { error };[m
     }[m
 }[m
 [m
[31m-const getActiveCourses = async (req, resp) => {[m
[32m+[m[32mconst getCourses = async (req, resp) => {[m
     try {[m
[31m-        activeCourses = await db.getActiveCourses();[m
[31m-        resp.send({ activeCourses });[m
[32m+[m[32m        courses = await db.getActiveCourses();[m
[32m+[m[32m        resp.send({ courses });[m
[32m+[m[32m    } catch (error) {[m
[32m+[m[32m        return { error };[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst getShopItems = async (req, resp) => {[m
[32m+[m[32m    try {[m
[32m+[m[32m        webShopItems = await db.getShopItems();[m
[32m+[m[32m        resp.send({ webShopItems });[m
     } catch (error) {[m
         return { error };[m
     }[m
[36m@@ -52,5 +61,6 @@[m [mmodule.exports = {[m
     getGalleryData,[m
     getContactData,[m
     getBlogPosts,[m
[31m-    getActiveCourses,[m
[32m+[m[32m    getCourses,[m
[32m+[m[32m    getShopItems[m
 }[m
\ No newline at end of file[m

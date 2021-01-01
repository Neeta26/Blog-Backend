const express = require("express");
const { getAllBlogs, getById } = require("../controllers/blogController");
const router = express.Router();

//to get blogs
router.route("/").get(getAllBlogs);
//to get blog by id
router.route("/:id").get(getById);

module.exports = router;

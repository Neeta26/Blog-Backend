const fs = require("fs");
const path = require("path");
const Blog = require("../models/blogModel.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));

//get all blogs
const getAllBlogs = (req, res, next) => {
  let result = blogs.filter((blog) => {
    return Object.keys(req.query).every((param) => {
      return blog[param] == req.query[param];
    });
  });
  if (result) {
    sendResponse(200, "Successful", result, req, res);
  } else {
    sendErrorMessage(
      new AppError(404, "Not Found", "Request Failed"),
      req,
      res
    );
  }
};

//get blog by id
const getById = (req, res) => {
  const result = blogs.find((blog) => {
    return blog.id == req.params.id;
  });
  if (result) {
    sendResponse(200, "Successful", [result], req, res);
  } else {
    sendErrorMessage(
      new AppError(404, "Not Found", "Task Not Available"),
      req,
      res
    );
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getById = getById;

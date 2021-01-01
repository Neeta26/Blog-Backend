const uniqid = require("uniqid");
class Blog {
  constructor(author, title, content) {
    this.id = uniqid();
    this.author = author;
    this.title = title;
    this.content = content;
  }
}
module.exports = Blog;

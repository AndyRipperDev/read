const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    chapters: [],
    stylesheets: [],
    coverData: String,
    coverExtension: String
});

let Book = mongoose.model('Book', bookSchema);
module.exports = Book
const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    name: String,
});

let Book = mongoose.model('Book', bookSchema);
module.exports = Book
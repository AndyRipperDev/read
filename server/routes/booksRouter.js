const express = require('express');
const booksRouter = express.Router();
const Book = require('../schemas/bookSchema');
const bodyParser = require('body-parser');
booksRouter.use(bodyParser.json({limit: '100mb', extended: true}));

// a middleware function with no mount path. This code is executed for every request to the booksRouter
booksRouter.route('/').post(function (req, res, next) {
    let books = req.body;
    Book.collection.insertMany(books)
        .then((books) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(books.ops);
        }, (err) => next(err))
        .catch((err) => next(err));
})

module.exports = booksRouter
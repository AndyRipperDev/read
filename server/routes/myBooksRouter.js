const express = require('express');
const myBooksRouter = express.Router();
const Book = require('../schemas/bookSchema');
const bodyParser = require('body-parser');
const authenticate = require("../authenticate");
const User = require('../schemas/userSchema');
myBooksRouter.use(bodyParser.json({limit: '100mb', extended: true}));
const ObjectId = require('mongodb').ObjectID

myBooksRouter.get('/', authenticate.verifyUser, (req, res, next) => {
    User.collection.findOne({'_id': req.user._id}).then((user) => {
        var ids = user.booksOwned
        var obj_ids = ids.map(function (id) {
            return ObjectId(id);
        });
        Book.find({_id: {$in: obj_ids}},{'name':true, 'author':true, 'coverData':true,'coverExtension':true}).then(books => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(books);
        }, (err) => next(err))
            .catch((err) => next(err));
    });
})
myBooksRouter.post('/', authenticate.verifyUser, (req, res, next) => {
    Book.collection.insertMany(req.body)
        .then((books) => {
            for (let b of books.ops)
            {
                User.collection.findOneAndUpdate({'_id':req.user._id}, {$push : {'booksOwned': b._id}})
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(books.ops);
        }, (err) => next(err))
        .catch((err) => next(err));
});


module.exports = myBooksRouter
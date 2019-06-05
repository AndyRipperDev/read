const express = require('express')
const config = require('./config')
var Strategy = require('passport-local').Strategy;
//routers
const booksRouter =require('./routes/myBooksRouter')
const authRouter =require('./routes/authRouter')

const app = express()
let mongoose = require('mongoose');
mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

const cors = require('./cors');
app.use(cors.cors)
// Initialize Passport and restore authentication state, if any, from the
// session.
var passport = require('passport');
require('./authenticate');

app.use(passport.initialize());
app.use(passport.session());
app.use('/myBooks', booksRouter)
app.use('/users', authRouter)
app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))

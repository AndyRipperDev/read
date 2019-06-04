const express = require('express')
const config = require('./config')
var Strategy = require('passport-local').Strategy;
//routers
const booksRouter =require('./routes/booksRouter')
const authRouter =require('./routes/authRouter')
var cors = require('cors')

const app = express()
let mongoose = require('mongoose');
mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

// Initialize Passport and restore authentication state, if any, from the
// session.
var passport = require('passport');
var authenticate = require('./authenticate');

app.use(passport.initialize());
app.use(passport.session());

app.use('/books', cors(), booksRouter)
app.use('/auth', cors(), authRouter)
app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))

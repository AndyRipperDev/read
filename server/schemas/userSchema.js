var passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});
userSchema.plugin(passportLocalMongoose);

let User = mongoose.model('User', userSchema);
module.exports = User


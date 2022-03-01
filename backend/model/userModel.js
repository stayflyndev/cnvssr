//user schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
name: {type: String, required: [true, "please enter your name"]
}, 
email: {type: String, required: [true, "please enter your email"], unique:true
}, 
password: {type: String, required: [true, "please enter your passwrod"]
}, 

},
{timestamps: true})
module.exports = mongoose.model('User', userSchema)
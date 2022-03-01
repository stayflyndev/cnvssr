//notes schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const noteSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    text: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Note", noteSchema)
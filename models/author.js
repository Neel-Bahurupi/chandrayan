const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: String,
    email: String,
    batch: Number,
    branch: String,
    linkedin_profile: String
})

const Author = mongoose.model('author', authorSchema);

module.exports = Author;
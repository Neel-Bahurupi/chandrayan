const mongoose = require('mongoose')
const {Schema} = mongoose;

const blogSchema = new Schema({
    title: String,
    company_name: String,
    date_posted: Date,
    ctc: Number,
    on_of_campus: Boolean,
    author: {
        ref: 'author',
        type: Schema.Types.ObjectId
    }
})

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
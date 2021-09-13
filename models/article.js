const mongoose = require('mongoose')
const {Schema} = mongoose;

//Article Schema
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    date_posted: Date,
    ctc: Number,
    on_campus: Boolean,
    author: {
        ref: 'user',
        type: Schema.Types.ObjectId
    }
})

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
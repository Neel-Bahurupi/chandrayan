const express = require('express')
const app = express();
const Blog = require('./models/blog')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chandrayan',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    , () => {
    console.log('connection successful');
})

app.get('/blogs', async(req, res) => {

    //fetch blogs from database
    const blogs = await Blog.find({});
    res.send({ blogs });
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})
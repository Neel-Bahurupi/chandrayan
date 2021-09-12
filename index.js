require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authJwt = require('./helpers/jwt');


mongoose.connect('mongodb://localhost:27017/chandrayan',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    , () => {
    console.log('connection successful');
})

//Importing Routes
const articles= require('./routes/articles');
const auth=require('./routes/auth');

//Middle Waares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/articles',articles);
app.use('/auth',auth);
app.use(authJwt());





app.listen(3000, () => {
    console.log('listening to port 3000');
})
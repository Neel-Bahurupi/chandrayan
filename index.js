require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authJwt = require('./helpers/jwt');
const errorHandlerJwt = require('./helpers/error-handler');

mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    , () => {
    console.log('connection to DB successful');
})

//Importing Routes
const articles= require('./routes/articles');
const auth=require('./routes/auth');

//Middle Waares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(authJwt());
app.use(errorHandlerJwt);
app.use('/articles',articles);
app.use('/auth',auth);


app.listen(3000, () => {
    console.log('listening to port 3000');
})
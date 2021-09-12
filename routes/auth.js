const mongoose = require('mongoose');
const express= require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/register', async(req, res) => {
    const {name, email, password, confirm_password } = req.body;
    console.log(req.body);
    
    if (password === confirm_password) {
        const newUser = new User({
            name,
            email,
            passwordHash : bcrypt.hash(password, 10)
        })
        await newUser.save();
        res.sendStatus(200);
        return;
    }
    res.sendStatus(401)
})

router.post('/login', async(req,res) => {
    const user = User.findOne({email: req.body.email})
    const secret = process.env.SECRET_KEY;

    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            { userId: user.id },
            secret,
            {expiresIn : '1w'}
        );
       
        res.status(200).send({user: user.email , token: token});
    } else {
       res.status(400).send('password is wrong!');
    }
})

module.exports = router;
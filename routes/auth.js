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
            passwordHash : bcrypt.hashSync((password), 10)
        })
        await newUser.save();
        return res.sendStatus(200);
    }
    res.sendStatus(401)
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    const secret = process.env.SECRET_KEY;

    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(password, user.passwordHash)) {
        const token = jwt.sign(
            { userId: user.id },
            secret,
            {expiresIn : '1w'}
        );
       
        return res.status(200).send({user: user.email , token: token});
    } else {
       return res.status(400).send('password is wrong!');
    }
})

module.exports = router;
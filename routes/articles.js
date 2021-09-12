const mongoose = require('mongoose');
const express= require('express');
const Article = require('../models/article');

const router = express.Router();

router.get('/',async(req,res)=>{
    res.send('Bantai ki public!!');
});

router.post('/', async(req, res) => {
    /*const { title, company_name, date_posted, ctc, on_of_campus, author } = req.body;
    const newArticle = new Article({
        title, company_name, date_posted, ctc, on_of_campus, author
    })
    await newBlog.save();
    res.sendStatus(200);*/
    res.send('Random');
});

router.delete('/', async(req, res) => {
    /*const { title, company_name, date_posted, ctc, on_of_campus, author } = req.body;
    const newArticle = new Article({
        title, company_name, date_posted, ctc, on_of_campus, author
    })
    await newArticle.save();
    res.sendStatus(200);*/
    res.send('Random');
});

router.put('/:id', async(req, res) => {
    /*const { title, company_name, date_posted, ctc, on_of_campus, author } = req.body;
    const newArticle = new Article({
        title, company_name, date_posted, ctc, on_of_campus, author
    })
    await newArticle.save();
    res.sendStatus(400);*/
    res.send('Random');
});

module.exports = router ;
const express= require('express');
const Article = require('../models/article');

const router = express.Router();

router.get('/',async(req,res)=>{
    res.send('Bantai ki public!!');
});

router.post('/', async(req, res) => {
    const { title, company_name, date_posted, ctc, on_campus, author } = req.body;
    const newArticle = new Article({
        title, company_name, date_posted, ctc, on_campus, author
    })
    await newArticle.save();
    res.status(200).send(newArticle);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const deletedArticle = await Article.findByIdAndRemove(id);
    
    if(!deletedArticle)
        return res.status(400).send('Article not found');

    res.status(200).send(deletedArticle);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, company_name, date_posted, ctc, on_of_campus, author } = req.body;
    const article = await Article.findByIdAndUpdate(id, {
        title, company_name, date_posted, ctc, on_of_campus, author
    },
        {useFindAndModify:false}
    )
    res.status(200).send(article);
});

module.exports = router ;
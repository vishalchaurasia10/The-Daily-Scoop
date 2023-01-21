const router = require('express').Router();
const Category = require('../models/Category')

router.post('/', async (req,res)=>{
    const already = await Category.find({"name" : {$eq : req.body.name}}).count();
    const newCat = new Category(req.body)
    try{
        if(already == 0)
        {
            const savedCat = await newCat.save()
            res.status(201).json(savedCat)
        }else{
            res.status(409).json("Category already present")
        }
    }catch(err)
    {
        res.status(500).json(err)
    }
} )

router.get('/', async (req,res)=>{
    try{
        const cats = await Category.find()
        res.status(200).json(cats)
    }catch(err)
    {
        res.status(500).json(err)
    }
} )

module.exports = router
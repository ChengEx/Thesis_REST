const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/getAllusers', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({ message: err});
    }
})

router.get('/:userId', async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({ message: err});
    }
})

router.post('/', async(req,res)=>{
    
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    try{
        const postUser = await user.save();
        res.json(postUser);
    }catch(err){
        res.json({ message: err});
    }
})


module.exports = router;

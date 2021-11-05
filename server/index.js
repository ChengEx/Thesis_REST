const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
require('dotenv/config');


server.use(bodyParser.json());
server.use('/posts',postsRoute);
server.use('/users',usersRoute);



mongoose.connect(process.env.mongoDB,{ useNewUrlParser:true },()=>{
    console.log("mongoDB connect!");
})

server.get('/',(req,res)=>{
    res.send('home');
})
server.listen(5000);

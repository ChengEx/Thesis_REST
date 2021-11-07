const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const cors = require('cors');
require('dotenv/config');

server.use(cors());
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

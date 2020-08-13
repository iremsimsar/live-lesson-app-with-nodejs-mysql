const db = require('../config/db.config');

const Post = db.post;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { response } = require('express');


exports.PostList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('index.ejs', {
            Post: result,
            post:post,   
    },
)});
}
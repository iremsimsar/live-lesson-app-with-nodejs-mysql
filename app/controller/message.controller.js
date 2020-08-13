
const db = require('../config/db.config');
const Message = db.message;
var bcrypt = require('bcryptjs');

exports.messagesave = (req, res) => {
    console.log('selam');
    console.log("Kayıt işlemi yapılıyor");
        Message.create({
            name: req.body.name,
            email:req.body.email,
            tel:req.body.tel,
            question:req.body.question
        }).then((err,response) => {
            res.redirect('/')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}

exports.iletisimsave = (req, res) => {
    console.log('selam');
    console.log("Kayıt işlemi yapılıyor");
        Message.create({
            name: req.body.name,
            email:req.body.email,
            question:req.body.question,
            message:req.body.message
        }).then((err,response) => {
            res.redirect('/')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}
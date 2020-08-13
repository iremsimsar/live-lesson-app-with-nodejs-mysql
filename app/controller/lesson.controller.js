const db = require('../config/db.config');
const mysql = require('url');
const config = require('../config/db.config.js');
const path = require('path');
const env = require('../config/env')
const Lesson = db.lesson;
const Role = db.role;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { response } = require('express');


exports.LessonCreate = (req, res) => {
    // Veritabanına kullanıcı kaydı
    console.log("Kayıt işlemi yapılıyor");
        Lesson.create({
            name: req.body.name,
            time: req.body.time,
            price: req.body.price,
            created_by_id: req.body.price,
            teacher_id:req.body.teacher_id
        }).then((request,response) => {
            res.redirect('/admin-home')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}
    

exports.checkDuplicateLesson = (req, res, next) => {
    // -> Kullanıcı adının var olup olmadığını kontrol et
    Lesson.findOne({
        where: {
            name: req.body.name,
            time: req.body.time,
        }
    }).then(lesson => {
        if (lesson) {
            console.log(req.body.name);
            res.status(400).send("Hata -> Bu ders bu saat aralığında var!");
            return;
        }

    });
}


exports.lessonList = (req, res ,result ) => {
    let  array;
   
	Lesson.findAll().then((admin)=>{
        res.render('List/admin.list.ejs', {
            Admin: result,
            admin:admin,   
    },
)});
}

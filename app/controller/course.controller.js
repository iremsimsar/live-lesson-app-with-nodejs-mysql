const db = require('../config/db.config');
const Lesson = db.lesson;
const Course = db.course;
const teacher = db.teacher;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { response } = require('express');


exports.courseCreate = (req, res) => {
        Course.create({
            name: req.body.name,
            time: req.body.time,
            price: req.body.price,
            author: req.body.author,
            teacher:req.body.teacher,
            assistantteacher:req.body.assistantteacher,
            category:req.body.category,
            explain:req.body.explain,
            reply:req.body.reply,
            lesson:req.body.lesson
        }).then((request,response) => {
            res.redirect('/admin-home')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}

exports.courseList = (req, res ,result ) => {
	Course.findAll().then((course)=>{
        res.render('Kurslar.ejs', {
            Course: result,
            course:course,   
    },
)});
}

exports.courseView = function (req, res,result) {
	Course.findOne({
		where: { id: req.params.id }
	}).then(course =>
		res.render('courseone.ejs', {
      Course: result,
      course:course,   
    })
  )}
const db = require('../config/db.config');
const mysql = require('url');
const config = require('../config/db.config.js');
const path = require('path');
const env = require('../config/env')
const Teacher = db.teacher;
const Role = db.role;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { response } = require('express');

 exports.signin = (request, response) => {
	console.log("Giriş Yapılıyor...");
	Teacher.findOne({
		where: {
			username: request.body.username
		}
	}).then(teacher => {
		// console.log(teacher);
		if (!teacher) {
			response.redirect('*');
		}
		var passwordIsValid = bcrypt.compareSync(request.body.password, teacher.password);
		if (!passwordIsValid) {
			return response.send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		response.redirect('/admin-home');
	}).catch(err => {
		response.status(500).send('Hata -> ' + err);
		console.log(err);
	});
}


exports.teachersignup = (req, res) => {
    // Veritabanına kullanıcı kaydı
    console.log("Kayıt işlemi yapılıyor");
        Teacher.create({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            gender:req.body.gender,
            phone:req.body.phone
        }).then((request,response) => {
            res.redirect('/admin-home')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}
    

exports.checkDuplicateTeacherNameOrEmail = (req, res, next) => {
    // -> Kullanıcı adının var olup olmadığını kontrol et
    Teacher.findOne({
        where: {
            name: req.body.name,
            surname: req.body.surname,
        }
    }).then(teacher => {
        if (teacher) {
            console.log(req.body.name);
            res.status(400).send("Hata -> Bu kullanıcı adı kullanılmakta!");
            return;
        }
        // -> Mailin var olup olmadığını kontrol et
        Teacher.findOne({
            where: {
                email: req.body.email
            }
        }).then(teacher => {
            if (teacher) {
                res.status(400).send("Hata -> Bu mail kullanılmakta!");
                return;
            }

            next();
        });
    });
}


exports.teacherList = (req, res ,result ) => {
    let  array;
   
	Teacher.findAll().then((user)=>{
        res.render('List/teacher.list.ejs', {
            Teacher: result,
            user:user,   
    },
)});
}

exports.teacherListHome = (req, res ,result ) => {
    let  array;
   
	Teacher.findAll().then((teacher)=>{
        res.render('teachers.ejs', {
            Teacher: result,
            teacher:teacher,   
    },
)});
}




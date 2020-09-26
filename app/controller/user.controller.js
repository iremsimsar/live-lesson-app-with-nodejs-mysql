const db = require('../config/db.config');
const mysql = require('url');
const config = require('../config/db.config.js');
const path = require('path');
const env = require('../config/env')
const User = db.user;
const Admin = db.admin;
const Role = db.role;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { response } = require('express');
const swal = require('sweetalert')
 
 exports.signin = (request, response) => {
	console.log("Giriş Yapılıyor...");
	Admin.findOne({
		where: {
			username: request.body.username
		}
	}).then(user => {
		// console.log(user);
		if (!user) {
			response.send('hatalı giris');
		}
		var passwordIsValid = bcrypt.compareSync(request.body.password, user.password);
		if (!passwordIsValid) {
            throw 'Hata Oluştu'
		}
		response.redirect('/admin-home');
	}).catch(err => {
		response.status(500).send('Hata -> ' + err);
		console.log(err);
	});
}


exports.usersignup = (req, res) => {
    // Veritabanına kullanıcı kaydı
    console.log("Kayıt işlemi yapılıyor");
        User.create({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            gender:req.body.gender,
            phone:req.body.phone,
            number:req.body.number,
        }).then((request,response) => {
            res.redirect('/admin-home')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}
    

exports.checkDuplicateUserNameOrEmail = (req, res, next) => {
    // -> Kullanıcı adının var olup olmadığını kontrol et
    User.findOne({
        where: {
            name: req.body.name,
            surname: req.body.surname,
        }
    }).then(user => {
        if (user) {
            console.log(req.body.name);
            res.status(400).send("Hata -> Bu kullanıcı adı kullanılmakta!");
            return;
        }
        // -> Mailin var olup olmadığını kontrol et
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send("Hata -> Bu mail kullanılmakta!");
                return;
            }

            next();
        });
    });
}


exports.userList = (req, res ,result ) => {
    let  array;
   
	User.findAll().then((user)=>{
        res.render('List/student.list.ejs', {
            User: result,
            user:user,   
    },
)});
}

var express = require('express');
var Authrouter = express.Router();
const db = require('../config/db.config.js');

//controller
const usercontroller = require('../controller/user.controller')
const teachercontroller = require('../controller/teacher.controller')
const admincontroller = require('../controller/admin.controller')
const coursecontroller = require('../controller/course.controller')
const middleware = require('../middleware/upload')
const postcontroller = require('../controller/blog.controller')

Authrouter.get('/admin', function(req, res)
{
      res.locals = {  title: 'Login' };
      res.render('Auth/login');
});

Authrouter.post('/auth', usercontroller.signin );

Authrouter.post('/admin-user-signup',usercontroller.checkDuplicateUserNameOrEmail, usercontroller.usersignup,);

Authrouter.post('/admin-post-save',postcontroller.postsave );


Authrouter.post('/admin-teacher-signup',teachercontroller.checkDuplicateTeacherNameOrEmail, teachercontroller.teachersignup);

Authrouter.post('/admin-signup', admincontroller.checkDuplicateAdminNameOrEmail, admincontroller.adminsignup,);

Authrouter.post('/admin-course-save',  coursecontroller.courseCreate,);

Authrouter.post('/admin-delete', admincontroller.adminDelete);

Authrouter.get('/pages-lock-screen', function(req, res)
{
      res.locals = {  title: 'Lock Screen' };
      res.render('Auth/pages_lock_screen');
});

Authrouter.get('/pages-recoverpw', function(req, res)
{
      res.locals = {  title: 'Password Recovery' };
      res.render('Auth/pages_recoverpw');
});
Authrouter.get('/pages-404', function(req, res)
{
      res.locals = {  title: '404 Page Error' };
      res.render('Auth/pages_404');
});
Authrouter.get('/pages-500', function(req, res)
{
      res.locals = {  title: '500 Page Error' };
      res.render('Auth/pages_500');
});

module.exports = Authrouter;
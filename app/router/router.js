var express = require('express');
var router = express.Router();

const homecontroller = require('../controller/home.controller');
const messagecontroller = require('../controller/message.controller');
const coursecontroller = require('../controller/course.controller');
const teachercontroller = require('../controller/teacher.controller');
const blogcontroller = require('../controller/blog.controller');

const admincontroller = require('../controller/admin.controller');

router.get('/',  homecontroller.PostList);

router.get('/Signup', function(req, res)
{
      res.locals = {  title: 'Ayzasoft|Signup' };
      res.render('Auth/signup.ejs');
});

router.get('/egitmenler',  teachercontroller.teacherListHome);


router.get('/Blog',blogcontroller.PostList);


router.get('/post-:id', blogcontroller.PostView);


router.get('/Kurslar',coursecontroller.courseList )


router.get('/Kurslar-:id',coursecontroller.courseView )


router.get('/iletisim', function(req, res)
{
      res.locals = {  title: 'Ayzasoft|Signup' };
      res.render('iletisim.ejs');
});


router.post('/iletisim',  messagecontroller.messagesave);


router.get('/canliders', function(req, res)
{
      res.locals = {  title: 'Ayzasoft|canli' };
      res.render('livelesson.ejs');
});

router.get('/course-english', function(req, res)
{
      res.locals = {  title: 'Ayzasoft|course' };
      res.render('course.ejs');
});


router.post('/',  messagecontroller.messagesave);

router.post('/signup', admincontroller.adminsignup);

module.exports = router;
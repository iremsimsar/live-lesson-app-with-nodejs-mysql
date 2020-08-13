var express = require('express');
var admin_router = express.Router();

const usercontroller = require('../controller/user.controller')
const teachercontroller = require('../controller/teacher.controller');

const admincontroller = require('../controller/admin.controller');

const coursecontroller = require('../controller/course.controller');
// Dashboard
admin_router.get('/admin-home', function(req,res){
    res.render('Dashboard/dashboard');
});

// Calendar
admin_router.get('/admin-calendar', function (req, res) {
    res.locals = {  title: 'Calendar' };
    res.render('Calendar/calendar');
})

// Email



admin_router.get('/admin-student-list', usercontroller.userList);

admin_router.get('/admin-teacher-list', teachercontroller.teacherList);


admin_router.get('/admin-list', admincontroller.adminList);

admin_router.post('/admin-user-delete-:id',admincontroller.adminDelete );




// Form Elements

admin_router.get('/admin-user-signup', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Save/student.save.ejs');
})

admin_router.get('/admin-teacher-signup', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Save/teacher.save.ejs');
})

admin_router.get('/admin-signup', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Save/admin.save.ejs');
})

admin_router.get('/admin-course-save', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Save/course.save.ejs');
})

admin_router.get('/admin-post-save', function (req, res) {
    res.locals = {  title: 'Form Validation' };
    res.render('Save/post.save.ejs');
})



//Google Maps
admin_router.get('/maps-google', function (req, res) {
    res.locals = {  title: 'Google Maps' };
    res.render('Maps/maps_google');
})
admin_router.get('/maps-vector', function (req, res) {
    res.locals = {  title: 'Vector Maps' };
    res.render('Maps/maps_vector');
})

module.exports = admin_router;
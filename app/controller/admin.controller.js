const db = require('../config/db.config');
const Admin = db.admin;
var bcrypt = require('bcryptjs');

 exports.signin = (request, response) => {
	console.log("Giriş Yapılıyor...");
	Admin.findOne({
		where: {
			username: request.body.username
		}
	}).then(admin => {
		if (!admin) {
			response.redirect('/');
		}
		var passwordIsValid = bcrypt.compareSync(request.body.password, admin.password);
		if (!passwordIsValid) {
			return response.send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		response.redirect('/admin-home');
	}).catch(err => {
		response.status(500).send('Hata -> ' + err);
		console.log(err);
	});
}

exports.adminsignup = (req, res) => {
    // Veritabanına kullanıcı kaydı
    console.log("Kayıt işlemi yapılıyor");
        Admin.create({
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
    

exports.checkDuplicateAdminNameOrEmail = (req, res, next) => {
    // -> Kullanıcı adının var olup olmadığını kontrol et
    Admin.findOne({
        where: {
            name: req.body.name,
            surname: req.body.surname,
        }
    }).then(admin => {
        if (admin) {
            console.log(req.body.name);
            res.status(400).send("Hata -> Bu kullanıcı adı kullanılmakta!");
            return;
        }
        // -> Mailin var olup olmadığını kontrol et
        Admin.findOne({
            where: {
                email: req.body.email
            }
        }).then(admin => {
            if (admin) {
                res.status(400).send("Hata -> Bu mail kullanılmakta!");
                return;
            }

            next();
        });
    });
}


exports.adminList = (req, res ,result ) => {
    let  array;
   
	Admin.findAll().then((user)=>{
        res.render('List/admin.list.ejs', {
            Admin: result,
            user:user,   
    },
)});
}


exports.adminDelete = function (req, res) {
	Admin.destroy({
		where: { id: req.params.id }
	}).then(admin =>
		res.render('Dashboard/dashboard.ejs')
	)
}

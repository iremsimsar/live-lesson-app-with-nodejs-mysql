const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    },
    
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.admin = require('../models/admin.model')(sequelize,Sequelize);
db.teacher = require('../models/teacher.model')(sequelize,Sequelize);
db.message = require('../models/message.model')(sequelize,Sequelize);
db.course = require('../models/course.model')(sequelize,Sequelize);
db.post = require('../models/post.model')(sequelize,Sequelize);


db.course.belongsToMany(db.teacher, { through: 'user_course', foreignKey: 'course_id', otherKey: 'teacher_id'});
db.teacher.belongsToMany(db.course, { through: 'user_course', foreignKey: 'teacher_id', otherKey: 'user_id'});

module.exports = db;
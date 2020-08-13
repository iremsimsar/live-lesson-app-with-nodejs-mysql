module.exports = (sequelize, Sequelize) => {
    const teacher = sequelize.define('teacher', {
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.STRING
        },
    });

    return teacher;
}
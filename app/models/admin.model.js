module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define('admin', {
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
        number: {
            type:Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.STRING
        },
    });

    return admin;
}
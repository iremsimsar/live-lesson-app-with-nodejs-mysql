module.exports = (sequelize, Sequelize) => {
    const message = sequelize.define('message', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        tel:{
            type:Sequelize.INTEGER
        },
        question:{
            type:Sequelize.STRING
        },
        message:{
            type:Sequelize.STRING
        }
    });

    return message;
}
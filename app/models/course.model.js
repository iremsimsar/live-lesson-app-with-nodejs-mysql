module.exports = (sequelize, Sequelize) => {

    const course = sequelize.define('course', {

        name: {
            type: Sequelize.STRING
        },
        explain: {
            type: Sequelize.TEXT('long')
        },
        category:{
            type:Sequelize.STRING
        },
        time: {
            type: Sequelize.FLOAT
        },
        price: {
            type: Sequelize.FLOAT
        },
        author: {
            type: Sequelize.STRING
        },
        lesson: {
            type: Sequelize.INTEGER
        },
        teacher : {
            type: Sequelize.STRING
        },
        assistantteacher : {
            type: Sequelize.STRING
        },
        reply: { 
            type:Sequelize.STRING
        }
    });

    return course;
}
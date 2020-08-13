module.exports = (sequelize, Sequelize) => {
    const lesson = sequelize.define('lesson', {
        name: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.FLOAT
        },
        price: {
            type: Sequelize.FLOAT
        },
        created_by_id: {
            type: Sequelize.INTEGER
        },
        teacher_id : {
            type: Sequelize.INTEGER
        }
    });

    return lesson;
}
module.exports = (sequelize, Sequelize) => {
    const post = sequelize.define('post', {
        title: {
            type: Sequelize.STRING
        },
        side_header: {
            type: Sequelize.STRING
        },
        explain: {
            type: Sequelize.TEXT('long')
        },
        author : {
            type: Sequelize.STRING
        },
        category : {
            type: Sequelize.STRING
        },
        date : {
            type: Sequelize.DATE
        },
        broadcasting: {
            type:Sequelize.ENUM('Yayınlandı', 'Taslak')
        }
    });

    return post;
}
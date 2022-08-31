const Sequelize = require('sequelize')
const connection = require('../database')

const Reply = connection.define('replies',{
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    threadId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    author:{
            type: Sequelize.STRING,
            allowNull :false
    }
});
Reply.sync({force: false})
module.exports = Reply
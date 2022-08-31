const Sequelize = require('sequelize')
const connection = require('../database')

const Thread = connection.define('thread',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
            type: Sequelize.STRING,
            allowNull :false
    }
});
Thread.sync({force: false})

module.exports = Thread
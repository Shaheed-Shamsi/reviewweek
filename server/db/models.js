const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/reviewweek', { logging: false });


const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    avatar: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

const Card =  db.define('card', {
    color: {
        type: Sequelize.STRING
    }
})

module.exports = {
    db,
    User,
    Card,
};

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
    cardname: {
        type: Sequelize.STRING
    },
    power: {
        type: Sequelize.INTEGER,
    },
    rarity: {
        type: Sequelize.INTEGER,
    }
})

Card.belongsTo(User)


module.exports = {
    db,
    User,
    Card,
};

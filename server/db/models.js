const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/reviewweek', { logging: false });

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {
    db: db,
    User: User
};

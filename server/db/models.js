const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/reviewweek', { logging: false });
const faker = require('faker')

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

// User.seed = function() {
//     for (var i = 0; i < 4; i++) {
//         User.create({
//             username: faker.name.firstName(),
//             description: faker.name.jobTitle(),
//             avatar: faker.image.avatar()
//         })
//             .catch(console.error)
//     }
// }

// User.seed()

module.exports = {
    db: db,
    User: User,
    Card: Card
};

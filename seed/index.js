const faker = require('faker')
const { db, User, Card } = require('../server/db/models')
const Sequelize = require('sequelize');


async function seed() {
    await db.sync({ force: true })
    let promiseHolder = []

    for (var i = 0; i < 16; i++) {


        let newUser = await User.create({
            username: faker.name.firstName(),
            description: faker.name.jobTitle(),
            avatar: faker.image.avatar()
        })

        promiseHolder.push(newUser)
        for (let j = 0; j < 4; j++) {

        let newCard = await Card.create({
            cardname: faker.random.word(),
            power: Math.floor(Math.random() * 100) + 1,
            rarity: Math.floor(Math.random() * 5) + 1
        })
            await newCard.setUser(newUser)
            promiseHolder.push(newCard)
        }
        
    }
    
    try {
    await Promise.all(promiseHolder)
    } catch(err) {
        console.error('you screwed up bro', err.message)
    }
}

seed()
.catch(err => {
    console.error(err.message)
    console.error(err.stack)
})
.then(() => db.close())
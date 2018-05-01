const faker = require('faker')
const { db, User, Card } = require('../server/db/models')


async function seed() {
    await db.sync({ force: true })
    let userArr = []
    for (var i = 0; i < 16; i++) {
        userArr.push(User.create({
            username: faker.name.firstName(),
            description: faker.name.jobTitle(),
            avatar: faker.image.avatar()
        }))
    }
    await Promise.all(userArr)
}

seed()
.catch(err => {
    console.error(err.message)
    console.error(err.stack)
})
.then(() => db.close())

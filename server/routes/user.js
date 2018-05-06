const express = require('express');
const router = express.Router();
const user = require('../db/models').User
const card = require('../db/models').Card

router.get('/', (req, res, next) => {
    return user.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/all', async (req, res, next) => {
    try {
        let allUsers = await card.findAll({
            include: [{
                all: true
            }]
        })
        res.json(allUsers)
    } catch (err) {
        console.error('error inside sequelize query', err)
    }

})

module.exports = router;

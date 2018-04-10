const express = require('express');
const router = express.Router();
const user = require('../db/models').User

router.get('/', (req, res, next) => {
    return user.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

module.exports = router;

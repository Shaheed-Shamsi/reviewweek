const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({
        farthestRoute: 'reached!!!!!!'
    })
})

module.exports = router;

'use strict';
console.log('reached index.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./db/models.js').db
// app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public'))); /* get an explanation as to what this code accomplishes */


app.use((err, req, res, next) => {
    console.error(err)
    res.sendStatus(500)
});


db.sync()
.then(() => {
    console.log('db synced')
    app.listen(5000, () => {
        console.log('listening on port 5000')
    })
});

console.log('mesh')
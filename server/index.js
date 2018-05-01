'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./db/models.js').db
const apiRoutes = require('./api/index.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public'))); /* get an explanation as to what this code accomplishes */

app.use('/api', apiRoutes)



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

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

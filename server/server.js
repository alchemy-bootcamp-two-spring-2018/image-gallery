const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const client = require('./db-client');

app.get('/api/galleries', (req, res) => {

  client.query(`

  `)
    .then(result => {
      res.send(result.rows);
    });
});
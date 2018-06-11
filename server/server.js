const express = require('express');
const app = express();

const cors =  require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const client = require('./db-client');

//routes
app.get('/api/albums', (req, res) => {
  client.query(`
    SELECT id,
    title,
    description
  FROM albums
  ORDER BY title;
  `).then(result => {
    res.send(result.rows);
  });
});

app.listen(3000, () => console.log('server running ...'));
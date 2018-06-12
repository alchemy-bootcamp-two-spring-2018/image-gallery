const express = require('express');
const app = express();

const client = require('./db-client');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/genres', (req, res) => {

  client.query(`
    select id,
      genre,
      album_name,
      artist,
      date,
      cover
    from genres;
  `).then(result => {
    res.send(result.rows);
  });
});

app.listen(3000, () => console.log('server is running..'));
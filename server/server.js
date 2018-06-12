const express = require('express');
const app = express();

const client = require('./db-client');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/genres', (req, res) => {

  client.query(`
    select id,
      title,
      description
    from genres;
  `).then(result => {
    res.send(result.rows);
  });
});

app.delete('/api/album_info/:id', (req, res) => {
  client.query(`
    delete from album_info where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.listen(3000, () => console.log('server is running..'));
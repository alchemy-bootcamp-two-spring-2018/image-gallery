// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

const client = require('./db-client');

// GET albums
app.get('/api/albums', (req, res) => {

  client.query(`
    SELECT *
    FROM albums;
  `).then(result => {
    res.send(result.rows);
  });
});

// GET image count per album
app.get('api/images/:albumid', (req, res) => {
  client.query(`
    SELECT count(i.albumid) as "albumCount"
    FROM images i
    LEFT JOIN albums a
    ON i.albumid = a.id
    WHERE albumid=$1;
  `, [req.params.albumid])
    .then(result => {
      console.log('in the server', result.rows);
      return res.send(result.rows);
    });
});

// GET images
app.get('/api/images/:id', (req, res) => {
  client.query(`
    SELECT * FROM images
    WHERE albumid=$1;
  `, [req.params.id])
    .then(result => {
      return res.send(result.rows);
    });
});

// INSERT album
app.post('/api/albums', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `,
  [body.title, body.description])
    .then(result => res.send(result.rows[0]));
});

// INSERT image
app.post('/api/images', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO images (title, description, albumid, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.title, body.description, body.albumid, body.url])
    .then(result => res.send(result.rows[0]));
});

// UPDATE image info
app.put('/api/images', (req, res) => {
  const body = req.body;
  client.query(`
    UPDATE images
    SET
      albumid = $1,
      title = $2,
      url = $3,
      description = $4
    WHERE id = $5
    returning *;
  `,
  [body.albumid, body.title, body.url, body.description, body.id]
  ).then(() => res.send({ updated: true }));
});

// DELETE album
app.delete('/api/albums/:id', (req, res) => {
  const promiseAlbum = client.query(`
    DELETE FROM albums WHERE id=$1;
  `,
  [req.params.id]
  ).then(() => true);
  const promiseImages = client.query(`
    DELETE FROM images where albumid=$1;
  `,
  [req.params.id]
  ).then(() => true);
  if(promiseAlbum && promiseImages) {
    res.send({ removed: true });
  }
});

// DELETE image
app.delete('/api/images/:id', (req, res) => {
  client.query(`
    DELETE FROM images WHERE id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

// Must add all 4 params so express "knows" this is custom error handler!
// eslint-disable-next-line
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => console.log('server running...'));
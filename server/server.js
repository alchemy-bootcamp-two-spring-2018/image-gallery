const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/animals';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/albums', (req, res) => {
  client.query(`
    SELECT
      id,
      title,
      description
    FROM albums
  `).then(result => {
    res.send(result.rows);
  });
});

app.get('/api/albums/:id', (req, res) => {

  const albumPromise = client.query(`
    SELECT *
    FROM albums
    WHERE albums.id = $1;
  `,
  [req.params.id]);
  
  const imagesPromise = client.query(`
    SELECT id, album_id as "albumID", title, description, url
    FROM images
    WHERE album_id = $1;
  `,
  [req.params.id]);

  Promise.all([albumPromise, imagesPromise])
    .then(results => {
      const albumResult = results[0];
      const imagesResult = results[1];

      if(albumResult.rows.length === 0) {
        res.sendStatus(404);
        return;
      }

      const album = albumResult.rows[0];
      const images = imagesResult.rows;

      album.images = images;

      res.send(album);

    });
});

app.post('/api/albums', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `,
  [body.title, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });
});





app.get('/api/images', (req, res) => {
  client.query(`
    SELECT
      id,
      album_id as "albumID",
      title,
      description,
      url
    FROM images
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/images', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO images (album_id, title, description, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, album_id as "albumID";
  `,
  [body.albumID, body.title, body.description, body.url]
  ).then(result => {
    res.send(result.rows[0]);
  });
});





app.listen(3000, () => console.log('server running...'));
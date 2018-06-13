const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json());


const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/gallery';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/albums', (req, res) => {

  client.query(`
    select * from albums;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.get('/api/images', (req, res) => {

  client.query(`
    select id,
    name,
    album_id as "albumId",
    description,
    url
    FROM images;
      `)
    .then(result => {
      res.send(result.rows);
    });
});

app.post('/api/images', (req, res) => {
  const body = req.body;

  client.query(`
    insert into images (name, album_id, description, url)
    values ($1, $2, $3, $4)
    returning *, album_id as "albumId";
  `,
  [body.name, body.albumId, body.description, body.url]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.post('/api/albums', (req, res) => {
  const body = req.body;

  client.query(`
    insert into albums (title, description)
    values ($1, $2)
    returning *;
  `,
  [body.title, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });
});


app.get('/api/albums/:id', (req, res) => {

  const albumPromise = client.query(`
    select id, title, description
    from albums
    where albums.id = $1;
  `,
  [req.params.id]);

  const imagesPromise = client.query(`
    select id, name, description, url
    from images
    where album_id = $1;
  `,
  [req.params.id]);

  Promise.all([albumPromise, imagesPromise])
    .then(promiseValues => {
      const albumResult = promiseValues[0];
      const imagesResult = promiseValues[1];

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

app.listen(3000, () => console.log('app is running...'));
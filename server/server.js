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
    select * from images;
  `)
    .then(result => {
      res.send(result.rows);
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
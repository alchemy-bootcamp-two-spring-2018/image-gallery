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

//   const imagesPromise = client.query(`
//     select id, title, album_id
//     from images
//     where album_id = $1;
//   `,
//   [req.params.id]);

// Promise.all([albumPromise, imagesPromise])
//   .then(results => {
//     const albumResult = results[0];
//     const imagesResult = results[1];

//     if(albumResult.rows.length === 0) {
//       res.sendStatus(404);
//       return;
//     }

//     const album = albumResult.rows[0];
//     const images = imagesResult.rows;

//     album.images = images;

//     res.send(album);
//   });


app.listen(3000, () => console.log('app is running...'));
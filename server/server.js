const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());


const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/galleries';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/albums', (req, res) => {

  client.query(`
    SELECT id,
      title,
      description
    FROM albums;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.get('/api/images', (req, res) => {
  client.query(`
    SELECT * FROM images;
  `)
    .then(result => {
      res.send(result.rows);
    });
});


app.get('/api/albums/:id', (req, res) => {
  const albumPromise = client.query(`

  SELECT id, title, description
  FROM albums
  WHERE albums.id = $1;
  `,
  [req.params.id]);

  const imagesPromise = client.query(`

  SELECT id, title, album_id, description, url
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

app.post('/api/images', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO images (title, album_id, description, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, album_id as "albumId";
  `, 
  [body.title, body.albumId, body.description, body.url]
  ).then(result =>{
    res.send(result.rows[0]);
  });
});

app.delete('/api/albums/:id', (req, res) =>{
  
  client.query(`
    DELETE FROM galleries 
    WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});
app.delete('/api/images/:id', (req, res) =>{
  
  client.query(`
    DELETE FROM galleries 
    WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.listen(3000, () => console.log('server running...'));
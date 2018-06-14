const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());


const client = require('./db-client');

app.get('/api/albums/stats', (req, res, next) => {

  client.query(`
  SElECT 
    avg("imageCount"),
    min("imageCount"),
    max("imageCount")
  FROM  
  (
    SELECT 
      a.id, a.title, a.description,
      count(i.id) as "imageCount"
    FROM albums a
    LEFT JOIN images i
    ON a.id = i.album_id
    GROUP BY a.id
    ORDER BY a.title
  ) newQuery;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/albums', (req, res, next) => {

  client.query(`
    SELECT 
      a.id, a.title, a.description,
      count(i.id) as "imageCount"
    FROM albums a
    LEFT JOIN images i
    ON a.id = i.album_id
    GROUP BY a.id
    ORDER BY a.title
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/images', (req, res, next) => {
  client.query(`
    SELECT * FROM images;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/albums/:id', (req, res, next) => {
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
    })
    .catch(next);
});


app.post('/api/albums', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `,
  [body.title, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.post('/api/images', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO images (title, album_id, description, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, album_id as "albumId";
  `, 
  [body.title, body.albumId, body.description, body.url]
  ).then(result =>{
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.delete('/api/albums/:id', (req, res, next) =>{
  client.query(`
    DELETE FROM images WHERE album_id=$1;
  `,
  [req.params.id]
  )
    .then(client.query(`
      DELETE FROM albums WHERE id=$1;
  `,
    [req.params.id]
    )).then(() => {
      res.send({ removed: true });
    })
    .catch(next);
});

app.delete('/api/images/:id', (req, res, next) =>{
  
  client.query(`
    DELETE FROM images 
    WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  })
    .catch(next);
});
/*eslint-disable-next-line*/
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR**\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(3000, () => console.log('server running...'));
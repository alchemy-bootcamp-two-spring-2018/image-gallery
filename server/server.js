// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

app.get('/api/albums/stats', (req, res, next) => {
  client.query(`
  SELECT
    avg("imgTotal"),
    min("imgTotal"),
    max("imgTotal")
    FROM (
      SELECT
      a.id,
      a.title,
      a.description,
      count(i.id) as "imgTotal"
    FROM albums a
    LEFT JOIN images i
    ON a.id = i.album_id
    GROUP BY a.id
    ) subquery;
    `).then(result => {
   res.send(result.rows[0]);
 })
  .catch(next);

})

app.get('/api/albums', (req, res, next) => {

  client.query(`
  SELECT
    a.id,
    a.title,
    a.description,
    count(i.id) as "imgTotal"
  FROM albums a
  LEFT JOIN images i
  ON a.id = i.album_id
  GROUP BY a.id
  ORDER BY a.id;
  `)
    .then(result => {
      res.send(result.rows);
    })
      .catch(next);
});

app.get('/api/images', (req, res, next) => {

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
    })
    .catch(next);
});

app.post('/api/images', (req, res, next) => {
  const body = req.body;
  if(body.name === 'error') return next('bad name');
  client.query(`
    insert into images (name, album_id, description, url)
    values ($1, $2, $3, $4)
    returning *, album_id as "albumId";
  `,
  [body.name, body.albumId, body.description, body.url]
  ).then(result => {
    res.send(result.rows[0]);
  })
  .catch(next);
});

app.post('/api/albums', (req, res, next) => {
  const body = req.body;
  if(body.title === 'error') return next('bad title');
  
  client.query(`
    insert into albums (title, description)
    values ($1, $2)
    returning *;
  `,
  [body.title, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  })
  .catch(next);
});


app.get('/api/albums/:id', (req, res, next) => {

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
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.log('***SERVER ERROR**\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(3000, () => console.log('app is running...'));
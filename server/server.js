require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const client = require('./db-client');

app.get('/api/albums/stats', (req, res, next) => {
  client.query(`
  SELECT
    count(*),
    avg("imageCount"),
    min("imageCount"),
    max("imageCount")
  FROM (  
    SELECT
        a.id,
        a.title,
        a.description,
        count(i.id) as "imageCount"
      FROM albums a
      LEFT JOIN images i
      ON a.id = i.album_id
      GROUP BY a.id
) p;
  `).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.get('/api/albums', (req, res, next) => {
  client.query(`
    SELECT
        a.id,
        a.title,
        a.description,
        count(i.id) as "imageCount"
      FROM albums a
      LEFT JOIN images i
      ON a.id = i.album_id
      GROUP BY a.id
      ORDER BY a.id;
  `).then(result => {
    res.send(result.rows);
  })
    .catch(next);
});
app.get('/api/albums/:id', (req, res, next) => {

  const albumPromise = client.query(`
    SELECT *
    FROM albums
    WHERE albums.id = $1;
  `,
  [req.params.id]);
  
  const imagesPromise = client.query(`
    SELECT id, album_id as "albumID", title, description, url
    FROM images
    WHERE album_id = $1
    ORDER BY id;
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

app.put('/api/albums/:id', (req, res, next) => {
  const body = req.body;

  client.query(`
    UPDATE albums
    SET
      title = $1,
      description = $2
    WHERE id = $3
    RETURNING *;
  `,
  [body.title, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.delete('/api/albums/:id', (req, res, next) => {
  client.query(`
    DELETE FROM images where album_id = $1;
  `,
  [req.params.id]
  )
    .then(client.query(`
      DELETE FROM albums where id = $1;
  `,
    [req.params.id]
    )).then(() => {
      res.send({ removed: true });
    })
    .catch(next);
});


app.get('/api/images', (req, res, next) => {
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
  })
    .catch(next);
});

app.post('/api/images', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO images (album_id, title, description, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, album_id as "albumID";
  `,
  [body.albumID, body.title, body.description, body.url]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.put('/api/images/:id', (req, res, next) => {
  const body = req.body;

  client.query(`
    UPDATE images
    SET
      title = $1,
      description = $2
    WHERE id = $3
    RETURNING *;
  `,
  [body.title, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.delete('/api/images/:id', (req, res, next) => {
  client.query(`
    DELETE FROM images where id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  })
    .catch(next);
});
//eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR***\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(3000, () => console.log('server running...'));
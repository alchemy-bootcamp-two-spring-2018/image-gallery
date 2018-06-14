require('dotenv').config();

const express = require('express');
const app = express();


const client = require('./db-client');

const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/records', (req, res, next) => {
  const body = req.body;
  client.query(`
    insert into records (
      title,
      genre_id,
      artist,
      description,
      cover
    ) 
    values ($1, $2, $3, $4, $5)
    returning *;
  `,
  [body.title, body.genre_id, body.artist, body.description, body.cover]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

//Get information for Genres.vue
app.get('/api/genres', (req, res, next) => {

  client.query(`
    select
      genres.id, genres.title, genres.description,
      count(records.id) as "recordsCount"
    from genres
    left join records
    on genres.id = records.genre_id
    group by genres.id
    order by genres.title;
  `) 
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);

});

//Get information for Home.vue
app.get('/api/genres/stats', (req, res, next) => {

  client.query(`
    select
      avg("recordsCount"),
      min("recordsCount"),
      max("recordsCount")
      from
    (select
      genres.id, genres.title, genres.description,
      count(records.id) as "recordsCount"
    from genres
    left join records
    on genres.id = records.genre_id
    group by genres.id
    order by genres.title)
    p;
  `) 
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);

});

//get for specific genres and their records
app.get('/api/genres/:id', (req, res, next) => {

  const genrePromise = client.query(`
    select id,
    title,
    description
    from genres g
    where g.id = $1;
  `,
  [req.params.id]);

  const recordsPromise = client.query(`
    select id,
    title,
    artist,
    description,
    cover
    from records
    where genre_id = $1;
  `,
  [req.params.id]);

  Promise.all([genrePromise, recordsPromise])
    .then(promiseValues => {
      const genreResult = promiseValues[0];
      const recordsResult = promiseValues[1];

      if(genreResult.rows.length === 0) {
        res.sendStatus(404);
        return;
      }

      const genre = genreResult.rows[0];
      const records = recordsResult.rows;

      genre.records = records;

      res.send(genre);
    })
    .catch(next);
});

app.delete('/api/records/:id', (req, res, next) => {
  client.query(`
    delete from records where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  })
    .catch(next);
});

//eslint-disabled-next-line
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR***\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(3000, () => console.log('server is running..'));
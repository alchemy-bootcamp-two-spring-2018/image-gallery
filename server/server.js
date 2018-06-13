const express = require('express');
const app = express();

const client = require('./db-client');

const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(morgan());
app.use(express.json());

app.post('/api/records', (req, res) => {
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
  });
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
    order by genres.id;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);

});

//get for specific genres and their records
app.get('/api/genres/:id', (req, res) => {

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
    });
});

app.delete('/api/records/:id', (req, res) => {
  client.query(`
    delete from records where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.listen(3000, () => console.log('server is running..'));
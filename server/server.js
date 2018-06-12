// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

const client = require('./db-client');

// routes
app.get('/api/albums', (req, res) => {

  client.query(`
    SELECT *
    FROM albums;
  `).then(result => {
    res.send(result.rows);
  });
});

// app.post('/api/neighborhoods', (req, res) => {
//   const body = req.body;

//   client.query(`
//     insert into neighborhoods (name, quadrant_id, population, founded, description)
//     values ($1, $2, $3, $4, $5)
//     returning *, quadrant_id as "quadrantId";
//   `,
//   [body.name, body.quadrantId, body.population, body.founded, body.description]
//   ).then(result => {
//     // send back object
//     res.send(result.rows[0]);
//   });
// });

// app.put('/api/neighborhoods/:id', (req, res) => {
//   const body = req.body;

//   client.query(`
//     update neighborhoods
//     set
//       name = $1,
//       quadrant_id = $2,
//       population = $3,
//       founded = $4,
//       description = $5
//     where id = $6
//     returning *, quadrant_id as "quadrantId";
//   `,
//   [body.name, body.quadrantId, body.population, body.founded, body.description, req.params.id]
//   ).then(result => {
//     res.send(result.rows[0]);
//   });
// });

app.delete('/api/albums/:id', (req, res) => {
  client.query(`
    DELETE FROM albums WHERE id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/images/:id', (req, res) => {
  client.query(`
    SELECT * FROM images
    WHERE albumid=$1;
  `, [req.params.id])
    .then(result => {
      res.send(result.rows);
    });
});

// app.get('/api/restaurants', (req, res) => {
//   client.query(`
//     select * 
//     from restaurants
//     where neighborhood_id=$1
//   `,
//   [req.query.neighborhoodId]
//   )
//     .then(result => {
//       res.send(result.rows);
//     });
// });

app.post('/api/images', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO images (title, description, albumid, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.title, body.description, body.albumid, body.url])
    .then(result => {
      res.send(result.rows[0]);
    });
});

app.listen(3000, () => console.log('server running...'));
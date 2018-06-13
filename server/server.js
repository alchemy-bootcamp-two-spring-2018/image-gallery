// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/cars';
const client = new Client (databaseUrl);
client.connect();

// routes
app.get('/api/images', (req, res) => {

  client.query(`
    SELECT id,
      decade_id as "decadeId",
      make,
      model,
      description,
      image_url as "imageUrl"
    FROM car_images;
  `).then(result => {
    res.send(result.rows);
  });
});

app.get('/api/decades', (req, res) => {

  client.query(`
    SELECT id,
      decade,
      description
    FROM car_decades;
  `).then(result => {
    res.send(result.rows);
  });
});

app.get('/api/decades/:id', (req, res) => {

  const decadePromise = client.query(`
    SELECT id,
      decade,
      description
    FROM car_decades
    WHERE car_decades.id = $1;
  `,
  [req.params.id]);

  const imagesPromise = client.query(`
    SELECT id,
    decade_id as "decadeId",
    make,
    model,
    description,
    image_url as "imageUrl"
    FROM car_images
    WHERE decade_id = $1;
  `,
  [req.params.id]);

  Promise.all([decadePromise, imagesPromise])
    .then(results => {
      const decadeResult = results[0];
      const imagesResult = results[1];

      if(decadeResult.rows.length === 0) {
        res.sendStatus(404);
        return;
      }

      const decade = decadeResult.rows[0];
      const images = imagesResult.rows;

      decade.images = images; 

      res.send(decade);
    });
});

app.post('/api/images', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO car_images (decade_id, make, model, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, image_url as "imageUrl", decade_id as "decadeId";
  `,
  [body.decadeId, body.make, body.model, body.imageUrl]
).then(result => {
    res.send(result.rows[0]);
  });
});

app.listen(3000, () => console.log('server running...'));
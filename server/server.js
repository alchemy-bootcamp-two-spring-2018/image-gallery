// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev')); 
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/cars';
const client = new Client (databaseUrl);
client.connect();

// routes
app.get('/api/images', (req, res, next) => {

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
  })
    .catch(next);
});

app.get('/api/decades', (req, res, next) => {

  client.query(`
    SELECT car_decades.id,
      decade,
      car_decades.description,
      count(images.decade_id) as "imageCount"
    FROM car_decades
    LEFT JOIN car_images images
    ON car_decades.id = images.decade_id  
    GROUP BY car_decades.id
    ORDER BY car_decades.decade;   
  `).then(result => {
    res.send(result.rows);
  })
    .catch(next);
});
app.get('/api/decades/stats', (req, res, next) => {

  client.query(`

  SELECT 
    count(*),
    avg("imageCount"),
    min("imageCount"),
    max("imageCount")
  FROM (
    SELECT car_decades.id,
      decade,
      car_decades.description,
      count(images.decade_id) as "imageCount"
    FROM car_decades
    LEFT JOIN car_images images
    ON car_decades.id = images.decade_id  
    GROUP BY car_decades.id
  ) decades;
  
  `).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.get('/api/decades/:id', (req, res, next) => {

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
    })
    .catch(next);
});

app.post('/api/images', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO car_images (decade_id, make, model, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *, image_url as "imageUrl", decade_id as "decadeId";
  `,
  [body.decadeId, body.make, body.model, body.imageUrl]
).then(result => {
    res.send(result.rows[0]);
  })
  .catch(next);
});

app.post('/api/decades', (req, res, next) => {
  const body = req.body;

  client.query(`
    INSERT INTO car_decades (decade, description)
    VALUES ($1, $2)
    RETURNING *;
  `,
  [body.decade, body.description]
).then(result => {
    res.send(result.rows[0]);
  })
  .catch(next);
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('******SERVER ERROR******\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(3000, () => console.log('server running...'));
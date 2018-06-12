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

app.post('/api/albums', (req, res) =>{
  const body = req.body;

  client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2)
    RETURNING *
  `,
  [body.title, body.description]
  ).then(result => {
    res.send(result.row[0]);
  });
});

// app.put('/api/galleries', (req, res) => {

// });

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

//Promise all placeholder

//additional gets?

app.listen(3000, () => console.log('server running...'));
require('dotenv').config();
const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(512) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    album_id INTEGER NOT NULL REFERENCES albums(id),
    title VARCHAR(256) NOT NULL,
    description VARCHAR(512),
    url VARCHAR(512) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    password VARCHAR(64) NOT NULL
  );
`).then(
  () => console.log('create tables complete'),
  err => console.log(err)
)
  .then(() => {
    client.end();
  });

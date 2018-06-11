const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(1024)
  );

  CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    album_id INTEGER NOT NULL REFERENCES albums(id),
    title VARCHAR(256),
    description VARCHAR(1024),
    url VARCHAR(512)
  )
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
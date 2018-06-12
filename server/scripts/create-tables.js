const client = require('../db-client');

client.query(`

CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  genre VARCHAR(256) NOT NULL,
  title VARCHAR(256),
  description VARCHAR(256),
);

CREATE TABLE IF NOT EXISTS records (
  id SERIAL PRIMARY KEY,
  artist VARCHAR(256) NOT NULL,
  album_name VARCHAR(256),
  date INTEGER,
  cover VARCHAR(512)
);

`)
  .then(
    () => console.log('create-tables complete!'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
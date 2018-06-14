const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(256),
    userid INTEGER
  );

  CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    albumid  INTEGER,
    title VARCHAR(256),
    description VARCHAR(256),
    url VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    password VARCHAR(256)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
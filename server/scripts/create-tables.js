const client = require('../db-client');

client.query(`

  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256),
    description VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256),
    artist VARCHAR(256) NOT NULL,
    description VARCHAR(256),
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
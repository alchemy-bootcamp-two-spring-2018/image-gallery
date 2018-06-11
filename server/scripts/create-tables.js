const client = require('../db-client');

client.query(`

  CREATE TABLE IF NOT EXISTS album_info (
    id SERIAL PRIMARY KEY,
    album_name VARCHAR(256) NOT NULL,
    artist VARCHAR(256),
    date INTEGER,
    cover VARCHAR(256)
  );

`)
  .then(
    () => console.log('create-tables complete!'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
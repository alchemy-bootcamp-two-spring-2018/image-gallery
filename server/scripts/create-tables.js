const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        title VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        title VARCHAR(256),
        album_id INTEGER NOT NULL REFERENCES albums(id)

    );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();

  });
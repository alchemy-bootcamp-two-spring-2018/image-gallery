const client = require('../db-client');

//URL = varchar or another data type?
client.query(`
  CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    album_id INTEGER NOT NULL REFERENCES albums(id),
    description VARCHAR(1024),
    url VARCHAR(512)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
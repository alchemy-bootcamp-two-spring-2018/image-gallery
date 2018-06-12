const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS car_decades (
    id SERIAL PRIMARY KEY,
    decade VARCHAR(256), 
    description VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS car_images (
    id SERIAL PRIMARY KEY,
    decade_id INTEGER NOT NULL REFERENCES car_decades(id),
    make VARCHAR(256),
    model VARCHAR(256),
    description VARCHAR(256),
    image_url VARCHAR](256)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  })
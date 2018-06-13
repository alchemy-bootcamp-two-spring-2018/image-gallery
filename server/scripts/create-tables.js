const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(512) NOT NULL
  );
`)
.then(
  () => console.log('create tables complete'),
  err => console.log(err)
)
.then(() => {
  client.end();
});
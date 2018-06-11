const client = require('../db-client');
const albums = require('../data/albums.json');

Promise.all(
  albums.map(albums => {
    return client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2);
    `,
    [albums.title, albums.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load was successful'),
    err => console.log(err)
  )
  .then(() => client.end());
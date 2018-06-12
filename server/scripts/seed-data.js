const client = require('../db-client');
const albums = require('./albums.json');

Promise.all(
  albums.map(album => {
    return client.query(`
      INSERT INTO albums (title, description)
      VALUES ($1, $2);
    `,
    [album.title, album.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
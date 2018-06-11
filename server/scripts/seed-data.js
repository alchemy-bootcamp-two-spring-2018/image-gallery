const client = require('../db-client');
const albums = require('../data/albums.js');
console.log(albums);

Promise.all(
  albums.map(album => {
    return client.query(`
        INSERT INTO albums (id, title, description)
        VALUES ($1, $2, $3);
    `,
    [album.id, album.title, album.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
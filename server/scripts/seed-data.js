const client = require('../db-client');
const seedAlbums = require('./albums.json');

Promise.all(
  seedAlbums.map(seedAlbum => {
    return client.query(`
      INSERT INTO genres (genre, title, description)
      VALUES ($1, $2, $3);
    `,
    [seedAlbum.genre, seedAlbum.title, seedAlbum.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed albums success'),
    err => console.error(err)
  )
  .then(() => client.end());

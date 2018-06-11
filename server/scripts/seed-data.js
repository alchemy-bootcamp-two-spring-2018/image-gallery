const client = require('../db-client');
const seedAlbums = require('./albums.json');

Promise.all(
  seedAlbums.map(seedAlbum => {
    return client.query(`
      INSERT INTO album_art (genre, album_name, artist, date, cover)
      VALUES ($1, $2, $3, $4, $5);
    `,
    [seedAlbum.genre, seedAlbum.album_name, seedAlbum.artist, seedAlbum.date, seedAlbum.cover]
    ).then(result => result.rows[0]);
  })
    .then(
      () => console.log('seed albums success'),
      err => console.error(err)
    )
    .then(() => client.end())
);

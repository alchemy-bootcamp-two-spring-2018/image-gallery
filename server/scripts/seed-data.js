const client = require('../db-client');
const albums = require('../data/albums.json');
const images = require('../data/images.json');

Promise.all(
  albums.map(albums => {
    return client.query(`
    INSERT INTO albums (title, description)
    VALUES ($1, $2);
    `,
    [albums.title, albums.description]
    ).then(result => result.rows[0]);
  }),
  images.map(images => {
    return client.query(`
    INSERT INTO images (album_id, title, description, url)
    VALUES ($1, $2, $3, $4);
    `,
    [images.album_id, images.title, images.description, images.url]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load was successful'),
    err => console.log(err)
  )
  .then(() => client.end());
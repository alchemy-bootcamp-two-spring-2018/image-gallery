const client = require('../db-client');
const albums = require('./albums.json');
const images = require('./images.json');

Promise.all(
  albums.map(album => {
    return client.query(`
        INSERT INTO albums (title)
        VALUES ($1);
    `,
    [album.title]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      images.map(images => {
        return client.query(`
            INSERT INTO images (
            title,
            album_id
            )
            VALUES ($1, $2);
        `,
        [images.title, images.album_id]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
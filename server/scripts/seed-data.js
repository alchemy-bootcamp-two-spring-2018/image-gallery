const client = require('../db-client');
const albums = require('./albums.json');
const images = require('./images.json');

Promise.all(
  albums.map(album => {
    return client.query(`
        INSERT INTO albums (
        title,
        description
        )
        VALUES ($1, $2);
    `,
    [album.title, album.description]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      images.map(images => {
        return client.query(`
            INSERT INTO images (
            name,
            album_id,
            description,
            url
            )
            VALUES ($1, $2, $3, $4);
        `,
        [images.name, images.album_id, images.description, images.url]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
const client = require('../db-client');
const albums = require('./albums.json');
const images = require('./images.json');

Promise.all(
  albums.map(album => {
    return client.query(`
    INSERT INTO albums (title, description)
      VALUES ($1, $2);
      `,
    [album.title, album.description]
    )
      .then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      images.map(image => {
        return client.query(`
        INSERT INTO images (album_id, title, description, url)
          VALUES ($1, $2, $3, $4);
          `,
        [image.album_id, image.title, image.description, image.url]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());

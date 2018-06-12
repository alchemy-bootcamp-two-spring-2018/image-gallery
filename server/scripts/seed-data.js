const client = require('../db-client');
const records = require('./records.json');
const genres = require('./genres.json');

Promise.all(
  genres.map(genre => {
    return client.query(` 
      INSERT INTO genres (title, description)
      VALUES ($1, $2);
      `,
    [genre.title, genre.description]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      records.map(record => {
        return client.query(`
          INSERT INTO records (
            title,
            genre_id,
            artist,
            description,
            cover
          )
          VALUES ($1, $2, $3, $4, $5);
        `,
        [record.title, record.genre_id, record.artist, record.description, record.cover]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
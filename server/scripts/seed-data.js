const client = require('../db-client');

let albums = [];
let images = [];

for(let i = 0; i < 3; i++) {
  albums.push({});
  albums[i].id = i;
  albums[i].title = 'album #' + i;
  albums[i].description = 'Description here!';
}

for(let i = 0; i < 100; i++) {
  images.push({});
  images[i].id = i;
  images[i].album_id = parseInt(Math.random() * 3) + 1;
  images[i].title = 'fun times #' + i;
  images[i].description = 'woooo fun times fun';
  images[i].url = 'https://picsum.photos/200/300/?random';
}
console.log('albums', albums, 'immages', images);


Promise.all(
  albums.map(album => {
    return client.query(`
        INSERT INTO albums (id, title, description)
        VALUES ($1, $2, $3);
    `,
    [album.id, album.title, album.description]
    ).then(result => {
      console.log(result.rows);
      result.rows;
    });
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
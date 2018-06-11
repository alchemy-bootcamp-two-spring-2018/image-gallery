const client = require('../db-client');

let albums = [];
let images = [];

for(let i = 0; i < 3; i++) {
  albums.push({});
  albums[i].title = 'album #' + i;
  albums[i].description = 'Description here!';
}

for(let i = 0; i < 5; i++) {
  images.push({});
  images[i].albumid = parseInt(Math.random() * 3) + 1;
  images[i].title = 'fun times #' + i;
  images[i].description = 'woooo fun times fun';
  images[i].url = 'https://picsum.photos/200/300/?random';
}
// console.log('albums', albums, 'images', images);

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
  .then(() => {
    return Promise.all(
      images.map(i => {
        return client.query(`
            INSERT INTO images (
              albumid, 
              title, 
              description, 
              url
            )
            VALUES ($1, $2, $3, $4);
        `,
        [i.albumid, i.title, i.description, i.url]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());



















// Promise.all(
//   albums.map(album => {
//     return client.query(`
//         insert into albums (id, title, description)
//         values ($1, $2, $3);
//     `,
//     [album.id, album.title, album.description]
//     ).then(result => {
//       console.log('rows', result.rows[0]);
//       result.rows;
//     });
//   }),
//   images.map(image => {
//     return client.query(`
//         insert into images (id, album_id, title, description, url)
//         values ($1, $2, $3, $4, $5);
//     `,
//     [image.id, image.albumId, image.title, image.description, image.url]
//     ).then(result => {
//       console.log('rows', result.rows);
//       result.rows;
//     });
//   })
// )
//   .then(
//     () => console.log('seed data load successful'),
//     err => console.error(err)
//   )
//   .then(() => client.end());
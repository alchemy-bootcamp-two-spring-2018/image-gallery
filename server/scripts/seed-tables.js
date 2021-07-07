const client = require('../db-client');
const albums = require('./albums.json');
const images = require('./images.json');

Promise.all(
    albums.map(albums => {
        return client.query(`
        INSERT INTO albums (title, description)
        VALUES ($1, $2);
        `,
        [albums.title, albums.description]
        ).then(result => result.rows[0]);
    })
)
    .then (() => {
        return Promise.all (
            images.map(images => {
            return client.query(`
            INSERT INTO images (album_id, title, description, url)
            VALUES ($1, $2, $3, $4);
            `,
            [images.album_id, images.title, images.description, images.url ]
            ).then(result => result.rows[0]);
        })
    );
})
    .then(
        () => console.log('Images seed data loaded successfully'),
        err => console.error(err)
    )
    .then(() => client.end());

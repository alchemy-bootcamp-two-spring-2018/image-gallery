const client = require('../db-client');
const images = require('../data/car_images.json');
const decades = require('../data/car_decades.json');

Promise.all(
  decades.map(decade => {
    return client.query(`
      INSERT INTO car_decades (
        decade,
        description
      )
      VALUES ($1, $2);
    `,
    [decade.decade, decade.description]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      images.map(image => {
        return client.query(`
          INSERT INTO car_images (
            decade_id,
            make,
            model,
            description,
            image_url
          )
          VALUES ($1, $2, $3, $4, $5);
        `,
        [image.decadeId, image.make, image.model, image.description, image.imageUrl]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
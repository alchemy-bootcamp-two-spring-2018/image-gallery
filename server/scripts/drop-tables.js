const client = require('../db-client'); 

client.query(`
  DROP TABLE IF EXISTS car_decades;
  DROP TABLE IF EXISTS car_images;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
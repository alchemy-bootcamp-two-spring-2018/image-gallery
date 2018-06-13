const client = require('../db-client'); 

client.query(`
DROP TABLE IF EXISTS car_images;
DROP TABLE IF EXISTS car_decades;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.error(err)
  )
  .then(() => {
    client.end();
  });
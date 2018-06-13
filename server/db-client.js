const DATABASE_URL = 'postgres://localhost:5432/gallery';  // MAC VERSION
// const DATABASE_URL = 'postgres://postgres:1234@localhost:5432/gallery';  // WINDOWS VERSION
const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db", DATABASE_URL'))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n****** DATABASE ERROR ******\n\n', err);
});

module.exports = client;

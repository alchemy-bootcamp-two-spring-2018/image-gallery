
const DATABASE_URL = 'postgres://localhost:5432/gallery';
const pg = require('pg');
const Client = pg.Client;

// send back db int as javascript int
types.setTypeParser(20, parseFloat);
// send back db float as javascript float
types.setTypeParser(1700, parseFloat);


const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;
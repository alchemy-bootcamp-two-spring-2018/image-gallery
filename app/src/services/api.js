const URL = 'http://localhost:3000/api';
const GENRES_URL = `${URL}/album_info`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getGenres() {
  return fetch('http://localhost:3000/api/genres', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getGenre(id) {
  return fetch('http://localhost:3000/api/genres/' + id, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getStats() {
  return fetch('http://localhost:3000/api/genres/stats', {
    headers: { 'content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function addRecord(record) {
  return fetch('http://localhost:3000/api/records', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
    .then(responseHandler);

}

export function deleteRecord(record) {
  return fetch('http://localhost:3000/api/records' + record.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application.json' },
  })
    .then(responseHandler);
}
const URL = '/api';
const GENRES_URL = `${URL}/genres`;
const RECORDS_URL = `${URL}/records`;


function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getGenres() {
  return fetch(GENRES_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getGenre(id) {
  return fetch(`${GENRES_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getStats() {
  return fetch(`${GENRES_URL}/stats`, {
    headers: { 'content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function addRecord(record) {
  return fetch(RECORDS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
    .then(responseHandler);

}

export function deleteRecord(record) {
  return fetch(RECORDS_URL + record.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application.json' },
  })
    .then(responseHandler);
}
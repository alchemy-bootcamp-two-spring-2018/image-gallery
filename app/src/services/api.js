const URL = 'http://localhost:3000/api';
const GENRES_URL = `${URL}/album_info`;

export function getGenres() {
  return fetch('http://localhost:3000/api/genres', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getGenre(id) {
  return fetch('http://localhost:3000/api/genres/' + id, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addRecord(record) {
  return fetch('http://localhost:3000/api/records', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
    .then(response => response.json());

}

export function deleteAlbum(id) {
  return fetch('http://localhost:3000/api/records' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application.json' },
  })
    .then(response => response.json());
}
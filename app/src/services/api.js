const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/genres`;

export function getAlbums() {
  return fetch('http://localhost:3000/api/genres', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
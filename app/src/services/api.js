
const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;

export function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}
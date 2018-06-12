const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/album_info`;

export function getAlbums() {
  return fetch('http://localhost:3000/api/album_info', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
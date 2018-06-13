
const URL = 'http://localhost:3000/api';

export function getAlbums() {
  return fetch(`${URL}/albums`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}

export function getAlbum(id) {
  return fetch(`${URL}/albums/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getImages() {
  return fetch(`${URL}/images`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}
const URL = 'http://localhost:3000/api';
const IMAGES_URL = `${URL}/images`;
const ALBUMS_URL = `${URL}/albums`;

export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getAlbum(id) {
  return fetch(`${URL}/albums/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
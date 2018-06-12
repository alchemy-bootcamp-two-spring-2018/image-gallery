const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;

export { getAlbums, getImages, addImage, deleteImage, deleteAlbums };

function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json());
}

function getImages(id) {
  return fetch(`${IMAGES_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json());
}

function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(res => res.json());
}

function deleteImage(id) {
  return fetch(`${IMAGES_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res);
}

function deleteAlbums(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res);
}
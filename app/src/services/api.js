const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;

export {
  getAlbums,
  getImages,
  addAlbum,
  addImage,
  updateImage,
  deleteAlbums,
  deleteImage,
  responseHandler
};

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

function getImages(id) {
  return fetch(`${IMAGES_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

function updateImage(image) {
  return fetch(`${IMAGES_URL}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}

function addAlbum(Album) {
  return fetch(ALBUMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Album)
  })
    .then(responseHandler);
}

function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}

function deleteImage(id) {
  return fetch(`${IMAGES_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

function deleteAlbums(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}
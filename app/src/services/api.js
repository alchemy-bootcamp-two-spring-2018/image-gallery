const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getAlbum(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getStats() {
  return fetch(`${ALBUMS_URL}/stats`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function addAlbum(album) {
  return fetch(ALBUMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(responseHandler);
}


export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}

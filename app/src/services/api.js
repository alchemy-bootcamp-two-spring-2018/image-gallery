const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const ALBUMSTATS_URL = `${URL}/albums/stats`;
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

export function getAlbumStats() {
  return fetch(ALBUMSTATS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getAlbum(id) {
  return fetch(`${URL}/albums/${id}`, {
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

//updateAlbum - stretch goal to be added
export function updateAlbum() {

}

export function deleteAlbum(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'applications/json' }
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
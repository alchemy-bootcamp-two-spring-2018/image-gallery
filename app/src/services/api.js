const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;


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

export function addAlbum(album) {
  return fetch(ALBUMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(response => response.json());
}

//updateAlbum
export function updateAlbum() {

}

//removeAlbum
export function removeAlbum() {
  
}

export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'applications/json' }
  })
    .then(response => response.json());
}

//newImage
export function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(response => response.json());
}
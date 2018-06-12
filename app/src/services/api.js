const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
//images url?

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

//getImage
export function getImage() {

}

//newImage
export function newImage() {
  
}
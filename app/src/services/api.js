const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const ALBUMSTATS_URL = `${URL}/albums/stats`;
const IMAGES_URL = `${URL}/images`;


export function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getAlbumStats() {
  return fetch(ALBUMSTATS_URL, {
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

//updateAlbum - stretch goal to be added
export function updateAlbum() {

}

export function deleteAlbum(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res =>res.json());
}

export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'applications/json' }
  })
    .then(response => response.json());
}

export function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(response => response.json());
}
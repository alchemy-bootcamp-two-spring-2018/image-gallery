
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

export function addAlbum(album) {
  return fetch(`${URL}/albums`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(response => response.json());   
}

export function addImage(image) {
  return fetch(`${URL}/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(response => response.json());
}
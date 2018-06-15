
const URL = '/api';

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getAlbums() {
  return fetch(`${URL}/albums`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(responseHandler);
}

export function getAlbum(id) {
  return fetch(`${URL}/albums/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}


export function getImages() {
  return fetch(`${URL}/images`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(responseHandler);
}

export function addAlbum(album) {
  return fetch(`${URL}/albums`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(responseHandler);   
}

export function getStats() {
  return fetch(`${URL}/albums/stats`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(responseHandler);
}

export function addImage(image) {
  return fetch(`${URL}/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}
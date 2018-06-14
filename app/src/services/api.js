function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => {
    throw err.message;
  });
}

export function getImages() {
  return fetch('http://localhost:3000/api/images', {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(responseHandler);
}

export function getDecades() {
  return fetch('http://localhost:3000/api/decades', {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(responseHandler);
}

export function getDecade(id) {
  return fetch(`http://localhost:3000/api/decades/${id}`, {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(responseHandler);
}

export function addCar(image) {
  return fetch('http://localhost:3000/api/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}

export function addAlbum(album) {
  return fetch('http://localhost:3000/api/decades', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(responseHandler);
}

export function getStats() {
  return fetch('http://localhost:3000/api/decades/stats', {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(responseHandler);
}
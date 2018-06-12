export function getImages() {
  return fetch('http://localhost:3000/api/images', {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(response => response.json());
}

export function getDecades() {
  return fetch('http://localhost:3000/api/decades', {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(response => response.json());
}

export function getDecade(id) {
  return fetch(`http://localhost:3000/api/decades/${id}`, {
    headers: { 'Content-Type' : 'application/json' }
  })
    .then(response => response.json());
}
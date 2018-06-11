let albums = {};
let images = {};

for(let i = 0; i < 3; i++) {
  albums.id = i;
  albums.title = 'album #' + i;
  albums.description = 'Description here!';
}

for(let i = 0; i < 100; i++) {
  images.id = i;
  images.album_id = parseInt(Math.random() * 3) + 1;
  images.title = 'fun times #' + i;
  images.description = 'woooo fun times fun';
  images.url = 'https://picsum.photos/200/300/?random';
}
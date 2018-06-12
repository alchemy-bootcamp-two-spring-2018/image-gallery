<template>
  <div>
    <h1>
      ALBUMS
    </h1>
    <ul v-if="albums">
      <li
        v-for="album in albums"
        :key="album.id"
      >
        <router-link :to="`/genres/${album.id}`">
          {{ album.artist }} ({{ album.album_name }})
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {getAlbums} from '../services/api.js'

export default {
  data() {
    return {
      albums: null
    };
  },
  created() {
    console.log('THIS IS GET ALBUMS', getAlbums);
    getAlbums()
      .then(albums => {
        this.albums = albums;
      });
  }

};
</script>

<style>

</style>

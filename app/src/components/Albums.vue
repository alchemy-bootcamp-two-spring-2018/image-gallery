<template>
  <div class="albums">
    <h2>I'm the Albums Component</h2>
    <ul v-if="albums">
      <li
        v-for="album in albums"
        :key="album.id"
      >
        <router-link :to="`/albums/:${album.id}`">
          {{ album.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAlbums } from '../services/api';

export default {
  data() {
    return {
      albums: null
    };
  },
  created() {
    getAlbums()
      .then(albumlist => {
        this.albums = albumlist;
      });
  }
};

</script>

<style scoped>

</style>

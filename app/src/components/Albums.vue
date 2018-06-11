<template>
  <div>
    <ul>
      <li
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
      >
      {{ album.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import { getAlbums } from '../services/api.js';

export default {
  data() {
    return {
      albums: null
    }
  },
  created() {
    this.albums = getAlbums();
  }
};
</script>

<style scoped>

</style>

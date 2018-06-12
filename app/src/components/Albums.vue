<template>
  <div>
    <ul>
      <li
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
      >
      <router-link :to="`/albums/${album.id}`">
        {{ album.title }}
      </router-link>
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
    };
  },
  created() {
    console.log('getette', getAlbums());
    getAlbums().then(res => this.albums = res);
  }
};
</script>

<style scoped>

</style>

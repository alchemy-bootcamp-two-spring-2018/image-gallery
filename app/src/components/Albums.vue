<template>
  <div>
    <h2>This is the Album page yo</h2>
    <ul v-if="albums">
      <li v-for="album in albums"
        :key="album.id"
        >
        <router-link :to="`/albums/${album.id}`">
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
      .then(albums => {
        this.albums = albums;
      });
  }

};
</script>

<style>

</style>

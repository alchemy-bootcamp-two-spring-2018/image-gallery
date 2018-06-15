<template>
  <div>
    <h1>Albums</h1>
    <ul v-if="albums">
      <li
        v-for="album in albums"
        :key="album.id"
      >
        <router-link :to="`/albums/${album.id}`">
          {{ album.title }} ({{ album.imageCount }})
        </router-link>
      </li>
    </ul>
    <router-link :to="`/albums/new`">Add New Album</router-link>
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


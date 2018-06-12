<template>
  <div v-if="album !== null">
    <h2>{{ album.title }}</h2>
    <h3>{{ album.description }}</h3>
  </div>
</template>

<script>
import { getAlbum } from '../services/api'
export default {
  data() {
    return {
      album: null
    };
  },
  created() {
    getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
      });
  }
};
</script>

<style>

</style>

<template>
  <div v-if="album !== null">
    <h2>
      This is the ALBUM DETAIL component
    </h2>
    <nav>
      <router-link :to="`/albums/${album.id}/list`">List View</router-link>
      <router-link :to="`/albums/${album.id}/thumbnail`">Thumbnail View</router-link>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import { getAlbum } from '../services/api';

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

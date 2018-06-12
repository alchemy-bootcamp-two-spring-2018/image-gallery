<template>
  <div>
    <h2>Album detail</h2>
 
    <!-- <nav>
        <router-link :to="`/albums/${album.id}/list`">list</router-link>
        &nbsp;
        <router-link :to="`/albums/${album.id}/thumbnail`">thumbnail</router-link>
        &nbsp;
        <router-link :to="`/albums/${album.id}/new`">add a new image</router-link>
        &nbsp;
        <router-link :to="`/albums/${album.id}/gallery`">gallery</router-link>
      
    </nav> -->

    <!-- <router-view 
      :images="album.images"
      :albumId="album.id"
    ></router-view> -->
  
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

<style scoped>

</style>

<template>
  <div v-if="album !== null">
    <h2>
       ALBUM DETAIL component
    </h2>
    <nav>
      <ul>
        <li><router-link :to="`/albums/${album.id}/list`">List View</router-link></li>
        <li><router-link :to="`/albums/${album.id}/thumbnail`">Thumbnail View</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import { getAlbum } from '../services/api';

export default {
  
  data() {
    return {
      album: null,
      image: null
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
ul {
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-left: -45px;
}
li {
  margin: 5px;
}
</style>

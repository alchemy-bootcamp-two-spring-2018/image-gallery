<template>
  <div>
      <h2>
        ALBUMS Component
      </h2>
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

<style scoped>
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

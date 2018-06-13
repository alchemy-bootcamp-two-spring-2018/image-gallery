<template>
  <div>
    <ul v-if="albums">
      <li v-for="album in albums"
      :key="album.id"
      >
      <router-link :to="`/albums/${album.id}`">
      {{ album.title }}
      </router-link>
      <p>
      {{ album.description}}
      </p>
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
  margin-left: -25px;
}
p {
  max-width: 150px;
  margin: 10px;
}

</style>

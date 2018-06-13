<template>
  <div>
    <ul>
      <li
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
      >
      <router-link :to="`/${album.id}`">
        {{ album.title }}
      </router-link>
      </li>
    </ul>
    <!-- Here's where the album deets will go? -->
    <div id="container-details">
      <router-view></router-view>
    </div>
    Still here?
  </div>
</template>

<script>
import { getAlbums } from '../services/api.js';

export default {
  data() {
    return {
      albums: null,
      id: this.$route.params.id
    };
  },
  created() {
    getAlbums().then(res => this.albums = res);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  margin: 6px;
}
</style>

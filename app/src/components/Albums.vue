<template>
  <div id="albums">
    <h2>This is the Albums component</h2>
    <nav>
      <router-link to="add-album">Add Album</router-link>
      <router-view/>
    </nav>
    <pre v-if="error">{{ error }}</pre>
    <ul v-if="albums !== null">
      <li
        v-for="album in albums"
        :key="album.id"
      >
        <router-link :to="`/albums/${album.id}`">
          <strong>{{ album.title }}</strong> ({{ album.count }} images)<br>
        </router-link>
        {{ album.description }}<br>&nbsp;
      </li>
    </ul>
  </div>
</template>

<script>
import { getAlbums } from '../services/api';

export default {
  data() {
    return {
      albums: null,
      error:null
    }
  },
  created() {
    getAlbums()
      .then(albums => {
        this.albums = albums;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style scoped>
nav {
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 0px solid black;
  border-bottom: 0px solid black;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 10px;
}


</style>

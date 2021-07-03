<template>
  <div class="albumz">
    <h2>This is the Album page yo</h2>
    <pre v-if="error">{{ error }}</pre>
    <ul v-if="albums">
      <li v-for="album in albums"
        :key="album.id"
        >
        <router-link :to="`/albums/${album.id}`">
        Photo Album Name: &nbsp; {{ album.title }} 
        &nbsp; 
        <li>Description: &nbsp; {{ album.description }} </li>
        <li>Images in Album: &nbsp; {{album.imgTotal}}</li>
        <br>
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
      albums: null,
      error: null
    };
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
ul {
  list-style: none;
}
pre {
  color: red;
}

</style>

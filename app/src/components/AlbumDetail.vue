<template>
  <div id="album-detail">
    <pre v-if="error">{{ error }}</pre>
    <h2 v-else>Album: {{ album.title }}</h2>
    <nav>
      <span class = "nav-link">
        <router-link to="list">List View</router-link>
        &nbsp;
        <router-link to="thumbnail">Thumbnail View</router-link>
        &nbsp;
        <router-link to="gallery">Gallery View</router-link>
        &nbsp;
        <router-link to="add-image">Add Image</router-link>
      </span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAlbum } from '../services/api';

export default {
  data() {
    return {
      album: {
        title: '',
        description: ''
      },
      error: null
    }
  },
  created() {
    this.error = '';
    getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>

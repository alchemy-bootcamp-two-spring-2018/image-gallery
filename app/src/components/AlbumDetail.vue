<template>
  <div id="album-detail">
    <h2>Album: {{ album.title }}</h2>
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
      }
    }
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

<template>
  <div v-if="album !== null">
    <h2>{{ album.title }}</h2>
    <h3>{{ album.description }}</h3>
    <nav>
      <router-link to="list">View as List</router-link>
      &nbsp;
      <router-link to="thumbnail">View as Thumbnail</router-link>
      &nbsp;
      <router-link to="gallery">View as Gallery</router-link>
        &nbsp;
      <router-link to="newImage">Add Image</router-link>
    </nav>

    <router-view
      :images="images"
      :onChange="handleAdd"
    ></router-view>
  </div>
</template>

<script>
import { getAlbum, addImage } from '../services/api';

export default {
  data() {
    return {
      album: null,
      images: null
    };
  },
  created() {
    getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
        this.images = album.images;
      });
  },
  methods: {
    handleAdd(image) {
      image.album_id = this.album.id;
      return addImage(image)
        .then(saved => {
          this.$router.push(`/images/${saved.id}`);
        });
    }
  }
};
</script>

<style>

</style>

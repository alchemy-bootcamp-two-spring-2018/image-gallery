<template>
  <div v-if="album !== null" class="album-detail">
    <h2>{{ album.title }}</h2>
    <h3>{{ album.description }}</h3>
    <button @click="handleDeleteAlbum">Delete Album</button>
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
import { getAlbum, addImage, deleteAlbum } from '../services/api';

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
      image.albumId = this.album.id;
      return addImage(image)
        .then(saved => {
          this.images.push(saved);
          this.$router.push(`/albums/${saved.albumId}/gallery`);
        });
    },
    handleDeleteAlbum() {
      if(confirm('Are you sure you want to delete?')) {
        deleteAlbum(this.$route.params.id)
          .then(res => {
            if(res.removed) {
              this.$router.push('albums');
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.album-detail {
  text-align: center;
}
</style>

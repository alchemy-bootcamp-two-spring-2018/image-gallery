<template>
  <div v-if="album">
    <h1>{{ album.title }}</h1>
    <p>{{ album.description }}</p>
    <nav>
      <router-link :to="`/albums/${id}/thumbnail`">Thumbnail</router-link> |
      <router-link :to="`/albums/${id}/gallery`">Gallery</router-link> |
      <router-link :to="`/albums/${id}/list`">List</router-link> |
      <router-link :to="`/albums/${id}/new`">New</router-link>
    </nav>
    <router-view 
      :images="album.images"
      :onAdd="handleAdd"
    />
  </div>
</template>

<script>
import { getAlbum, addImage } from '../services/api';
export default {
  data() {
    return {
      album: null
    };
  },
  created() {
    getAlbum(this.id)
      .then(album => {
        this.album = album;
      });
  },
  props: ['id'],

  methods: {
    handleAdd(newImage) {
      newImage.albumID = this.id;
      return addImage(newImage)
        .then(saved => {
          this.album.images.push(saved);
          this.$router.push(`/albums/${this.albumID}`);
        });
    }
  }
};
</script>

<style>

  h1 {
  font-family: 'Economica', sans-serif;
  }

</style>


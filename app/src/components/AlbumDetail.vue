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
    <router-view />
  </div>
</template>

<script>
import { getAlbum } from '../services/api';
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
  props: ['id']
};
</script>

<style>

</style>


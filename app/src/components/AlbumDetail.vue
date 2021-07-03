<template>
  <div v-if="album !== null">
    <h2>Album detail</h2>
 
    <nav>
        <router-link :to="`/albums/${album.id}/list`">list</router-link>
        &nbsp;
        <router-link :to="`/albums/${album.id}/thumbnail`">thumbnail</router-link>
        &nbsp;
        <router-link :to="`/albums/${album.id}/new`">add a new image</router-link>
    </nav>

    <router-view 
      :albumId="album.id"
      :images="album.images"
      :on-add="handleAdd"
    ></router-view>
  
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
    getAlbum(this.$route.params.id)
      .then(album => {
        this.album = album;
      });
  },
  methods: {
    handleAdd(image) {
      image.albumId = this.album.id;
      return addImage(image)
        .then(saved => {
          this.album.images.push(saved);
          this.$router.push(`/albums/${this.albumId}`);
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}

</style>

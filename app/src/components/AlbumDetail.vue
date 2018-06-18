<template>
  <div v-if="album !== null">
    <nav>
      <ul>
        <li><router-link :to="`/albums/${album.id}/list`">List View</router-link></li>
        <li><router-link :to="`/albums/${album.id}/thumbnail`">Thumbnail View</router-link></li>
        <li><router-link :to="`/albums/${album.id}/new`">Add Image</router-link></li>
      </ul>
    </nav>

    <router-view
      :images="album.images"
      :albumId="album.id"
      :on-add="handleAdd"
    ></router-view>

  </div>
</template>

<script>
import { getAlbum, addImage } from '../services/api';

export default {
  
  data() {
    return {
      album: null,
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
          this.$router.push('/albums/${this.image.albumId}');
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-left: -40px;
}
li {
  margin: 5px;
}
</style>

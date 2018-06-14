<template>
  <div>
    <ul v-if="albums">
      <li v-for="album in albums"
      :key="album.id"
      >
      <router-link :to="`/albums/${album.id}`">
      {{ album.title }}
      </router-link>
      <p>
      {{ album.description}}
      </p>
      </li>
    </ul>
    <router-link :to="`/albums/new`">Create Album</router-link>

    <router-view
    :on-add="handleAdd"
    ></router-view>
  </div>
</template>

<script>
import { getAlbums, addAlbum } from '../services/api';

export default {
  data() {
    return {
      albums: null
    };
  },
  created() {
    getAlbums()
      .then(albums => {
        this.albums = albums;
      });
  },

  methods: {
    handleAdd(album) {
      album.albumId = this.album;
      return addAlbum(album)
        .then(saved => {
          this.albums.push(saved);
          this.$router.push(`/albums/${saved.id}`);
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
  margin-left: -25px;
}
p {
  max-width: 150px;
  margin: 10px;
}

</style>

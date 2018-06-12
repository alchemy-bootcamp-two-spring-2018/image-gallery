<template>
  <div>
    <h1>Albums</h1>
    <ul v-if="albums">
      <li
        v-for="album in albums"
        :key="album.id"
      >
        <router-link :to="`/albums/${album.id}`">
          {{ album.title }}
        </router-link>
      </li>
    </ul>
    <AlbumForm
      :onChange="handleAdd"
    />
  </div>
</template>

<script>
import { getAlbums, addAlbum } from '../services/api';
import AlbumForm from './AlbumForm';

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
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      return addAlbum(album)
        .then(saved => {
          this.albums.push(saved);
          this.$router.push(`/albums/${saved.id}`);
        });
    }
  }
};
</script>

<style>

</style>


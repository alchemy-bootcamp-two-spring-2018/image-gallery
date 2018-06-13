<template>
  <div class="albums">
    <h2>Albums</h2>
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
import AlbumForm from './AlbumForm';
import { getAlbums, addAlbum } from '../services/api';

export default {
  data() {
    return {
      albums: null
    };
  },
  created() {
    getAlbums()
      .then(albumlist => {
        this.albums = albumlist;
      });
  },
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      return addAlbum(album)
        .then(saved => {
          this.$router.push(`/albums/${saved.id}`);
        });
    }
  }
};

</script>

<style scoped>

</style>

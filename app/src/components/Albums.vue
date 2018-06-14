<template>
  <div class="albums">
    <h2>Albums</h2>
    <ul v-if="album">
      <li
        v-for="album in album"
        :key="album.id"
      >
        <router-link :to="`/albums/${album.id}`">
          {{ album.title }} ({{ album.imageCount }} image{{ album.imageCount !== 1 ? 's' : '' }})
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
import { addAlbum } from '../services/api';

export default {
  props: ['album', 'albumstats'],
  components: {
    AlbumForm
  },
  methods: {
    handleAdd(album) {
      return addAlbum(album)
        .then(saved => {
          this.albums.push(saved);
          this.$router.push(`/albums/${saved.id}`);
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};

</script>

<style scoped>
.albums {
  text-align: center;
}
li {
  border: rgb(179, 179, 179);
  border-style: solid;
  border-width: .5px;
  border-radius: 3px;
  text-align: left;
  margin: 5px;
  margin-left: 37%;
  width: 300px;
  list-style: none;
}
li:hover {
  cursor: pointer;
  background-color: rgba(176, 196, 222, 0.795);
}
</style>

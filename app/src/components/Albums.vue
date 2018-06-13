<template>
  <div>
    <ul>
      <li
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
      >
      <router-link :to="`/albums/${album.id}`">
        {{ album.title }} ({{ album.imagecount }})
      </router-link>
      </li>
      <li>
        <a
          v-if="!editing"
          @click.prevent="editing = true"
        >
          ➕
        </a>
        <a
          v-else
          @click.prevent="editing = false"
        >
          ⚒
        </a>
      </li>
    </ul>
    <new-album
      v-if="editing"
      :album="albums"
      :handle-add="handleAdd"
    />
  </div>
</template>

<script>
import { getAlbums, getImageCount, addAlbum } from '../services/api.js';
import NewAlbum from './NewAlbum.vue';
export default {
  components: {
    NewAlbum
  },
  data() {
    return {
      albums: null,
      editing: false
    };
  },
  created() {
    getAlbums().then(res => this.albums = res)
    .then(() => {
      this.albums.forEach(a => a.imageCount = getImageCount(a.id).then(res => res));
    });
  },
    methods: {
    handleAdd(album) {
      return addAlbum(album)
        .then((result) => {
          this.albums.push(result);
          album = {};
          document.getElementById('message').textContent = 'Album sucessfully added!';
          this.editing = false;
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  margin: 6px;
}
</style>

<template>
  <div>
    <ul>
      <li
        v-for="album in albums"
        :key="album.id"
        :albumId="album.id"
      >
      <router-link :to="`/albums/${album.id}`">
        <strong>{{ album.title }}</strong> ({{ album.imageCount }})
      </router-link>
      {{ album.imageAverage }}
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
import { getAlbums, addAlbum } from '../services/api.js';
import NewAlbum from './NewAlbum.vue';
export default {
  components: {
    NewAlbum
  },
  data() {
    return {
      albums: null,
      editing: false,
      error: null
    };
  },
  created() {
    getAlbums().then(res => {
      this.albums = res;
    });
  },
  methods: {
    handleAdd(album) {
      return addAlbum(album)
        .then((result) => {
          result.imageCount = 0;
          this.albums.push(result);
          album = {};
          document.getElementById('message').textContent = 'Album sucessfully added!';
          this.editing = false;
        })
        .catch(err => {
          this.error = err;
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

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
    <router-link :to="`/albums/new`">Add New Album</router-link>
  </div>
</template>

<script>
import { getAlbums } from '../services/api';

export default {
  data() {
    return {
      albums: null,
      adding: false
    };
  },
  created() {
    getAlbums()
      .then(albums => {
        this.albums = albums;
      });
  }
};
</script>

<style>
.slide-vertical-enter-active, .slide-vertical-leave-active {
  transition: all .5s ease;
}

.slide-vertical-enter, .slide-vertical-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>


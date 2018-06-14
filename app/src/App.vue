<template>
  <div id="app">
    <h1>Photo Albums!</h1>
    <nav>
    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/albums" class="nav">Albums</router-link>
    <router-link to="/about" class="nav">About</router-link>
    </nav>
    <hr>
    <router-view
    :albums="albums"
    ></router-view>
  </div>
</template>

<script>
import { getAlbums } from './services/api.js';

export default {
  data() {
    return {
      albums: ''
    };
  },

  created() {
    getAlbums()
      .then(albums => {
        this.albums = albums;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 60px;
}

.nav {
  margin: 10px;
}
</style>

<template>
  <div id="app">
   <h1>Image gallery Project</h1>
    <nav>
      <router-link to="/">Go to Home</router-link>
      &nbsp;
      <router-link to="/about">Go to About</router-link>
      &nbsp;
      <router-link to="/albums">Go to Albums</router-link>
      &nbsp;
      <router-link to="/Addalbum">Add an Album</router-link>
    </nav>

    <router-view
    :albums="albums">
    </router-view>

  </div>
</template>

<script>
import { getAlbums } from './services/api';

export default {
  data() {
    return {
      albums: null,
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
body {
  background: rgb(5, 0, 33);
  color: white;
}
a {
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

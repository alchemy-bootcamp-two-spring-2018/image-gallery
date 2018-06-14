<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <hr id="top-hr"/>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;
      <router-link to="/albums">Go to Albums</router-link>
    </nav>
    <hr />

    <router-view
      :album="albums"
      :albumStats="albumStats"
    ></router-view>

  </div>
</template>

<script>
import { getAlbums, getAlbumStats } from './services/api';

export default {
  data() {
    return {
      albums: null,
      albumStats: null
    };
  },
  created() {
    getAlbums()
      .then(albumlist => {
        this.albums = albumlist;
      })
      .catch(err => {
        this.error = err;
      }),
    getAlbumStats()
      .then(albumlist => {
        this.albumStats = albumlist;
      })
      .catch(err => {
        this.error = err;
      });
  },
};
</script>

<style>
h1 {
  font-family: fantasy;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #182028;
  margin-top: 60px;
}

body {
  margin: 4%;
}

h1, nav {
  text-align: center;
}

a {
  height: 25px;
  padding: 7px;
  color: #2c3e50;
  text-decoration: none;
}
.router-link-active {
  color: #2c3e50;
}

hr {
  width: 90%;
}

</style>

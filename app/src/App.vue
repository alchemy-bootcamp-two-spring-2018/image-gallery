<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/albums">Anal bum covers</router-link>
      &nbsp;
      <router-link to="/about">Aboot</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>

export default {
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

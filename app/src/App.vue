<template>
  <div id="app">
    <h1>App Page</h1>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;
      <router-link to="/albums">Go to Home</router-link>
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
  color: #2c3e50;
  margin-top: 60px;
}
h1, nav {
  text-align: center;
}
</style>

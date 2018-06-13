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
  color: gray;
}

hr {
  width: 90%;
}

</style>

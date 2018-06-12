<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/albums">Albums</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
    </nav>

    <div id="container-view">
      <router-view></router-view>
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: black;
  margin: 20px auto;
  width: 800px;
}
li, a {
  background: darkslategray;
}
nav {
  margin: 33px 0;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 6px;
  border-top: 2px solid gray;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid gray;
}

a:hover {
  background: black;
  color: white;
}

a:focus {
  background: black;
}

#container-view {
  background-color: rgba(0, 0, 0, .69);
}
</style>

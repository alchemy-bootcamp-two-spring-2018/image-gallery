<template>
  <div id="app">
    <h1>Image Gallery App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;

      <router-link to="/about">About</router-link>
      &nbsp;

      <router-link to="/albums">Albums</router-link>
      
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

};
</script>

<style>

h1 {
  text-align: center;
}

nav {
  text-align: center;
}

</style>

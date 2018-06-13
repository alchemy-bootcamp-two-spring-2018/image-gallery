<template>
  <div id="app">
    <h1 class="page-title">Image Gallery</h1>
    <nav>
      <router-link to="/">Go to Home</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;
      <router-link to="/albums">Albums</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style>

#app {
  font-family: 'Kreon', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-title {
  
  font-size: 3.5em;
  font-family: 'Kreon', serif;
  font-weight: 700;
}
</style>

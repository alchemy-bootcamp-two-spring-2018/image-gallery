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
html {
  background-color: #fff;
}

#app {
  font-family: 'Kreon', serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
nav {
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: rgba(178, 231, 240, .5);
}
.page-title {
  
  font-size: 3.5em;
  font-family: 'Kreon', serif;
  letter-spacing: -2px;
  font-weight: 700;
}
a {
  font-weight: bold;
}

nav a {
  text-decoration: none;
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 24px;
  background-color: rgb(90, 157, 238);
  color: white;
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px 15px;
  border: 1px solid #ccc;
}
nav a:hover {
  background-color: darkblue;
}
nav a:active {
  background-color: chocolate;
}
</style>

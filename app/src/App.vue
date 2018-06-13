<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/albums">Albums</router-link>
    </nav>
    <h1>Petfolio</h1>
    <router-view/>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
body {
  font-family: 'Source Sans Pro', sans-serif;
}

h1 {
  font-family: 'Economica', sans-serif;
}


h1 {
  text-align: center;
}

nav {
  color: white;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* background-color: rgb(44, 44, 44); */
  height: 35px;
}

a {
  width: 33%;
  color: white;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  border: 1px solid white;
  background-color: rgb(44, 44, 44);

}
a:hover {
  width: 33%;
  color: white;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  border: 2px solid white;
  background-color: rgb(119, 119, 119);

}
</style>

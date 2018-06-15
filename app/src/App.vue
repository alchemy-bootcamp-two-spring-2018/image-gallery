<template>
  <div id="app">
    <header>
      <router-link to="/"><h1>Petfolio</h1></router-link>
      <nav class="main-nav">
        <router-link to="/about">About</router-link>
        <router-link to="/albums">Albums</router-link>
        <router-link to="/login">Sign up</router-link>
      </nav>
    </header>
    <router-view class="content"/>
  </div>
</template>

<script>

export default {

};
</script>

<style>
html {
  background: #FFF9E5;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 30px;
}

#app {
  display: grid;
  grid-template: 100px / auto;
}

header {
  display: grid;
  grid-template: auto / 150px 1fr;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5em;
}

a {
  text-decoration: none;
}

a.router-link-exact-active {
  color: red;
}


h1 {
  font-family: 'Economica', sans-serif;
  margin: 0px;
  font-size: 3em;
  color: black;
}

button {
  border: none;
  padding: 10px 20px;
  background: #F77976;
  font-size: 1.3em;
  transition: all .4s ease;
}

button:hover {
  background: #991814;
}
</style>

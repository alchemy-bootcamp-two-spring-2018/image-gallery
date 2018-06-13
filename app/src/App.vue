<template>
  <div id="app">
    <h1>Photo Albums!</h1>
    <nav>
    <router-link to="/" class="nav">Go Home</router-link>
    <router-link to="/albums" class="nav">Albums</router-link>
    <router-link to="/about" class="nav">About</router-link>
    </nav>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Albums from './components/Albums';

export default {
  name: 'app',
  components: {
    Home,
    About,
    Albums
  }
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
  border: 2px solid black;
}
.nav {
  margin: 10px;
}
</style>

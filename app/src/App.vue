<template>
  <div id="app">
    <h1>This is the APP component</h1>
    <p>About</p>
    <p>Albums</p>
    <About/>
    <Albums/>
  </div>
</template>

<script>
import About from './components/About';
import Albums from './components/Albums';

export default {
  name: 'app',
  components: {
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

p {
  display: inline;
  margin: 10px;
}
</style>

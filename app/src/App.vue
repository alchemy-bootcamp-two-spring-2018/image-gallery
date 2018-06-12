<template>
  <div class="hello">
    <h1>App.Vue</h1>
    <nav>
      <router-link to ="/">Go to Home</router-link>
      &nbsp;
      <router-link to ="/about">Go to About</router-link>
      &nbsp;
      <router-link to ="/genres">List of Genres</router-link>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>


export default {
  
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

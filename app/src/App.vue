<template>
  <div id="app">
    <h1>This is our homepage</h1>
    <nav>
      <!-- <router-link to="/">Go to Home</router-link> -->

      <router-link to="/about">Go to About</router-link>
      &nbsp;

      <router-link to="/albums">Go to Albums</router-link>
      
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  
};
</script>

<style>

</style>

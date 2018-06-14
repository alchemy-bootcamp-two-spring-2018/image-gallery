<template>
  <div>
    <h2>
      Welcome to our home page!
    </h2>
    <div v-if="stats">
      <p>Wow! You only have <strong>{{ albums.length }}</strong> albums in your collection!</p>
      <p>Add some more over <router-link :to="`/albums`">here!</router-link></p>
      <p>The minimum number of photos you have in an albums is {{ stats[0].min }}</p>
      <p>The maximum number of photos you have in an albums is {{ stats[0].max }}</p>
      <p>The average number of photos you have in an albums is {{ stats[0].avg }}</p>
    </div>

    <img src="../assets/home_bg.jpg">
  </div>
</template>

<script>

export default {
  

  props: ['albums', 'stats']

};
</script>

<style>

</style>

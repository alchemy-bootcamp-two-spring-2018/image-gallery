<template>
  <div>
    <h2>
      Welcome to our home page!
    </h2>
    <p>Wow! You only have <strong>{{ albums.length }}</strong> albums in your collection!</p>
    <p>Add some more over <router-link :to="`/albums`">here!</router-link></p>
    <p>The minimum number of photos you have in an albums is {{ stats[0].min }}</p>
    <p>The maximum number of photos you have in an albums is {{ stats[0].max }}</p>
    <p>The average number of photos you have in an albums is {{ stats[0].avg }}</p>


    <img src="../assets/home_bg.jpg">
  </div>
</template>

<script>
import { getStats } from '../services/api.js';

export default {
  data() {
    return {
      stats: ''
    };
  },

  created() {
    getStats()
      .then(stats => {
        this.stats = stats;
      })
      .catch(err => {
        this.error = err;
      });    
  },

  props: ['albums']

};
</script>

<style>

</style>

<template>
<div>
    <h2>Welcome to the Album Home Page</h2>
  <div v-if="stats !== null">
    In this database there are: 
    {{ albums.length }} albums.
    <br>
    {{ stats.avg }} average images per album.
    <br>
    There are a maximum of {{ stats.max }} images, and a minimum of {{ stats.min }} images per album.

  </div>
  </div>
</template>

<script>
import { getStats } from '../services/api';

export default {
  props: ['albums'],
  data() {
    return {
      album: null,
      stats: null
    };
  },
  created() {
    getStats()
      .then(stats => {
        this.stats = stats;  
      });
  }

};
</script>

<style>



</style>

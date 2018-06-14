<template>
  <div>
    <h1>Home</h1>
    <p>{{ stats.avg }}</p>
  
  </div>
</template>

<script>
import { getStats } from '../services/api';
export default {
  data() {
    return {
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

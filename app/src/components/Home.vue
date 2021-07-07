<template>
  <div v-if="stats">
    <h1>Home</h1>
    <p>Number of Albums: {{ stats.count }} </p>
    <p>Average Images per Album: {{ stats.avg }}</p>
    <p>Max Images within an Album: {{ stats.max }} </p>
    <p>Min Images within an Album: {{ stats.min }} </p>
  
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

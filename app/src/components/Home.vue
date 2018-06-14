<template>
  <div id="home">
    <pre v-if="error">{{ error }}</pre>
    <br/><h2>Our image gallery contains {{ stats.count }} albums, with an average of {{ stats.average }} images each!</h2>
    <h3>Our smallest album contains {{ stats.min }} images, our largest has {{ stats.max }}!</h3><br/>
    <p>Click <router-link to="/Albums">here</router-link> to start browsing and add your own!</p>
  </div>
</template>

<script>
import { getStats } from '../services/api';

export default {
  data() {
    return {
      stats: {
        "max": '',
        "round": '',
        "min": '',
        "average": ''
      },
      error: null
    }
  },
  created() {
    this.error = '';
    getStats()
      .then(statResult => {
        this.stats = statResult;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>

<template>
  <div>
    <h1>Albums</h1>
    <pre v-if="error">{{ error }}</pre>

    <ul v-if="decades">
      <li 
        v-for="decade in decades"
        :key="decade.id"
      >
        <router-link :to="`/albums/${decade.id}`">
          {{ decade.description }}
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { getDecades } from '../services/api';

export default {
  data() {
    return {
      decades: null,
      error: null
    };
  },

  created() {
    getDecades()
      .then(decades => {
        this.decades = decades;
      })
      .catch(err => {
        this.error = err;
      });
  }
};

</script>

<style>

</style>

<template>
  <div>
    <h1>Albums</h1>
    <nav>
      <router-link :to="`/albums/new_album`">New Album</router-link>  
      <router-view>

      </router-view>
    </nav>
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
import { getDecades, getStats } from '../services/api';

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

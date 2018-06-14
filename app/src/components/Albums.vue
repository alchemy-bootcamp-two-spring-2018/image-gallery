<template>
  <div>
    <h1>Albums</h1>
    <nav>
      <router-link :to="`/albums/new`">New Album</router-link>  
      <router-view
      :onPost="handlePost"
      >
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
import { getDecades, getStats, addAlbum } from '../services/api';

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
  },

   methods: {
    handlePost(newAlbum) {
      // newCar.decadeId = this.decade.id;
      return addAlbum(newAlbum)
        .then(saved => {
          this.decades.push(saved);
          this.$router.push(`/albums`);

        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};

</script>

<style>

</style>

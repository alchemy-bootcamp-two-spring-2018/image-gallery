<template>
  <div>
    <h1>
      Genres
    </h1>
    <ul v-if="genres">
      <li
        v-for="genre in genres"
        :key="genre.id"
      >
        <router-link :to="`/genres/${genre.id}`"
        :genres="genres"
        >
          {{ genre.title }} ({{ genre.description }})
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getGenres
  } from '../services/api.js'

export default {
  data() {
    return {
      genres: null
    };
  },
  created() {
    getGenres()
      .then(genres => {
        this.genres = genres;
      });
  }

};
</script>

<style>

</style>

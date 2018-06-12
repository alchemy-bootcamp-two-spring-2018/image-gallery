<template>
  <div>
    <nav>
      <router-link :to="`/genres/${genre.id}/list`">list</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/thumbnail`">thumbnail</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/gallery`">gallery</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/new`">add a new album</router-link>
    </nav>
    <router-view
    :records="genre.records"
    :genreId="genre.id"
    ></router-view>
  </div>
</template>

<script>
import { getGenre } from '../services/api';

export default {
  data() {
    return {
      genre: null
    };
  },
  created() {
    getGenre(this.$route.params.id)
      .then(genre => {
        this.genre = genre;
      })
  }
}
</script>

<style>

</style>

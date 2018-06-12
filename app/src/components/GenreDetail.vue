<template>
  <div>
    <nav>
      <router-link :to="`/genres/${genre.id}/list`">list</router-link>
      <router-link :to="`/genres/${genre.id}/thumbnail`">thumbnail</router-link>
      <router-link :to="`/genres/${genre.id}/gallery`">gallery</router-link>
      <router-link :to="`/genres/${genre.id}/new`">add a new album</router-link>
    </nav>
    <router-view></router-view>
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
    console.log(this.$route.params.id)
    getGenre(this.$route.params.id)
      .then(genre => {
        this.genre = genre;
      })
  }

}
</script>

<style>

</style>

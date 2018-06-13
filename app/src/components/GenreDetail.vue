<template>
  <div v-if="genre !== null">
    <nav>
      <router-link :to="`/genres/${genre.id}/list`">list</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/thumbnail`">thumbnail</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/gallery`">gallery</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/new`">add a new record</router-link>
    </nav>
    <router-view
    :records="genre.records"
    :genre="genre"
    :on-add="handleAdd"
    ></router-view>
  </div>
</template>

<script>
import { getGenre, addRecord } from '../services/api';

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
  },
  methods: {
    handleAdd(record, genre) {
      record.genre_id = genre.id;
      return addRecord(record)
        .then(saved => {
          this.genre.records.push(saved);
          this.$router.push(`/genres/${this.genreID}`);
        });
    }
  }
};
</script>

<style>

</style>

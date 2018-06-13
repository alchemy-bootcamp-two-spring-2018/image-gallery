<template>
  <div v-if="genre !== null">
    <nav>
      <article class="addnew">
      <router-link :to="`/genres/${genre.id}/new`">add a new record</router-link>
      </article>
      <span class="navbar">
      <router-link :to="`/genres/${genre.id}/list`">list</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/thumbnail`">thumbnail</router-link>
      &nbsp;
      <router-link :to="`/genres/${genre.id}/gallery`">gallery</router-link>
      &nbsp;
      </span>
      
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

<style scoped>


.addnew {
  font-family: 'Comfortaa', sans-serif;
  font-weight: bolder;
  font-size: 1.5em;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: #FFF;
  background-color: rgba(101, 4, 97, 0.331); 
}


</style>

<template>
  <div>
    <h1>Album Detail</h1>
    <pre v-if="error">{{ error }}</pre>

    <section v-if="decade">
      <h2>{{ decade.description }}</h2>

      <nav>
        <router-link :to="`/albums/${decade.id}/list`">List</router-link>
        &nbsp;
        <router-link :to="`/albums/${decade.id}/gallery`">Gallery</router-link>
        &nbsp;
        <router-link :to="`/albums/${decade.id}/thumbnail`">Thumbnail</router-link>
        &nbsp;
        <router-link :to="`/albums/${decade.id}/new`">New Image</router-link>
      </nav>

      <router-view 
      :cars="decade.images"
      :onAdd="handleAdd"
       >
      </router-view>
    </section>
  </div>
</template>

<script>
import { getDecade, addCar } from '../services/api';


export default {
  data() {
    return {
      decade: null,
      error: null
    };
  },

  created() {
    getDecade(this.$route.params.id)
      .then(decade => {
        this.decade = decade;
      })
      .catch(err => {
        this.error = err;
      });
  },

  methods: {
    handleAdd(newCar) {
      newCar.decadeId = this.decade.id;
      return addCar(newCar)
        .then(saved => {
          this.decade.images.push(saved);
          this.$router.push(`/albums/${this.decadeId}`);

        })
        .catch(err => {
          this.error = err;
        });
    }
  }

};
</script>

<style>

h2 {
  display: flex;
  justify-content: center;
}

</style>

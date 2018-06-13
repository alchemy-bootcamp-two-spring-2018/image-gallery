<template>
  <section>
    <h1>New Image Component</h1>

    <form @submit.prevent="handleAdd">
      <label> 
        Make:
        <input type="text" placeholder="Car Make" required v-model="cars.make">
      </label>

      <label>
        Model:
        <input type="text" placeholder="Model" required v-model="cars.model">
      </label>

      <label>
        Image:
        <input type="text" placeholder="Image URL" v-model="cars.imageUrl">
      </label>
      <button type="submit">Submit</button>

    </form>
  </section>
</template>

<script>
import { addCar } from '../services/api';

export default {
  data() {
    return {
      decadeId:'',
      
    }
  },
  props: ['decadeId'],

  methods: {
    handleAdd(car) {
      car.decadeId = this.decadeId;
      return addCar(car)
        .then(saved => {
          this.cars.push(saved);
          this.$router.push(`/decades/${this.decadeId}`);
        });
    }
  }
};

</script>

<style>

</style>

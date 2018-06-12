<template>
  <section>
    <CarForm
    label="Add"
    :on-edit="handleAdd"/>
    <div>
      <h1>New Image Component</h1>
    </div>
  </section>
</template>

<script>
import CarForm from './CarForm.vue';
import { addCar } from '../services/api';

export default {
  props: ['cars', 'decadeId'],
  components: {
    CarForm
  },
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

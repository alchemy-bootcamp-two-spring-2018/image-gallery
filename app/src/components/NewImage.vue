<template>
  <section>
    <h1>New Image</h1>

    <form @submit.prevent="handleSubmit">
      <label> 
        Make:
        <input type="text" placeholder="Car Make" required v-model="newCar.make">
      </label>

      <label>
        Model:
        <input type="text" placeholder="Model" required v-model="newCar.model">
      </label>

      <label>
        Image:
        <input type="text" placeholder="Image URL" v-model="newCar.imageUrl">
      </label>

      <label>
        Description:
        <input type="textarea" placeholder="Description" v-model="newCar.description">
      </label>

      <button type="submit">Submit</button>

    </form>
  </section>
</template>

<script>

export default {
  data() {
    return {
      newCar: {
        make: '',
        model: '',
        imageUrl: '',
        description: ''
      }
    };
  },

  methods: {
    handleSubmit() {
      this.onAdd(this.newCar);
    }
  },

  props: ['onAdd']

};

</script>

<style>

form {
  display: flex;
  justify-content: center;
}

</style>

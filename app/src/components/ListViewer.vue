<template>
  <div>
    <h1>ListViewer Component</h1>
    <ul v-if="cars">
      <li
        v-for="car in cars"
        :key="car.id"
      >

      {{ car.make }}
      {{ car.model }}
      </li>
    </ul>

  </div>
</template>

<script>
export default { 

  props: ['cars']

};
</script>

<style>

</style>

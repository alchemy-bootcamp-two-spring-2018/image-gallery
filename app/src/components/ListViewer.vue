<template>
  <div>
    <h1>List Viewer</h1>
    <ul v-if="cars">
      <li v-for="car in cars" :key="car.id">
        <p><b>Make:</b> {{ car.make }}</p>
        <p><b>Model:</b> {{ car.model }}</p>
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

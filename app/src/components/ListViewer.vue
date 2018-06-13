<template>
  <div>
    <h1>ListViewer Component</h1>
    <ul v-if="cars">
      <li v-for="car in cars" :key="car.id">
        <p>{{ car.make }}</p>
        <p>{{ car.model }}</p>
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

img {
  width: 300px;
}

</style>

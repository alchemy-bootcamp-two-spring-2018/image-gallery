<template>
  <div>
    <h1>Thumbnail Viewer</h1>

    <section v-for="car in cars" :key="car.id">
      <p>{{ car.make }}</p>
      <p>{{ car.model }} </p>
      <img :src="car.imageUrl">
    </section>

  </div>
</template>

<script>
export default {

  props: ['cars']

}
</script>

<style>
img {
  width: 300px;
}
</style>

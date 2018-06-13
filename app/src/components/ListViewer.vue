<template>
  <div>
      <div v-for="image in images" :key="image.id">
        <h2>{{ image.title }}</h2>
        <p>{{ image.description }}</p>
      </div>
  </div>
</template>

<script>

export default {
  props: ['images']
};
</script>

<style>

</style>

<template>
  <div>
    <h1>ThumbnailViewer</h1>
    <div v-for="image in images"
      :key="image.id">
      <img :src="image.url">
      <h3>{{ image.title }}</h3>
      <p>{{ image.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images']
};
</script>

<style scoped>

img {
  width: 200px;
}
</style>


<template>
  <div>
    <h1>Thumbnail Viewer</h1>
    <img v-for="image in images" :key="image.id" :src="image.url">
  </div>
</template>

<script>
export default {
  props: ['images'],
  methods: {

  }
};
</script>

<style>

</style>

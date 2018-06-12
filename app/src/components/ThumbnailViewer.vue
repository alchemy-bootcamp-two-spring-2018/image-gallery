<template>
  <div>
    <h1>Thumbnail Viewer</h1>
    <img v-for="image in images" :key="image.id" :href="image.url">
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

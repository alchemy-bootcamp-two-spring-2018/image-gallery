<template>
  <div class="thumb-nail">
    <div v-for="image in images" :key="image.id">
      <h5>{{ image.title }}</h5>
      <img :src="image.url">
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
};
</script>

<style scoped>
  img {
    width: 200px;
    margin: 15px;
    margin-top: 2px
  }
  h5 {
    margin: 0px;
    margin-top: 5px;
  }
  .thumb-nail {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

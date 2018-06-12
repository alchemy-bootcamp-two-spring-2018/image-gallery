<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <span>{{ image.title }}</span>
        <img :src="image.url">
      </li>
    </ul>
  </div>
</template>

<script>
import { getImages } from '../services/api';
export default {
  data() {
    return {
      images: null
    };
  },
  created() {
    console.log('we are here', this.$route.params);
    getImages(this.$route.params.id)
      .then(image => {
        this.images = image;
      });
  }
};
</script>
<style scoped>

</style>

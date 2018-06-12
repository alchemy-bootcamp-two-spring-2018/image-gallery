<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <div>{{ image.title }}</div>
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
    getImages(this.$route.params.id)
      .then(image => {
        this.images = image;
      });
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>

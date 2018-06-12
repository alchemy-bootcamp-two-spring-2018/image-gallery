<template>
  <div>
    <!-- <button @click="">Previous</button>
    <button @click="">Next</button> -->
      <p>{{ images[this.currentImage].id }}</p>
      <img :src="images[this.currentImage].url">
  </div>
</template>

<script>
import { getImages } from '../services/api';
export default {
  data() {
    return {
      images: null,
      currentImage: 0
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
li {
  display: inline-block;
  margin: 3px;
  padding: 6px;
  border-top: 3px solid gray;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  border-left: 3px solid gray;
}
/* img {
  height: 100px;
  width: auto;
} */
</style>

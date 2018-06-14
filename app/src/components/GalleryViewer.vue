<template>
  <div class="gallery">
    <gallery :images="urlList" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in urlList"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>m

<script>
import VueGallery from 'vue-gallery';

export default {
  data() {
    return {
      index: null
    };
  },
  props: ['images'],
  components: {
    'gallery': VueGallery
  },
  computed: {
    urlList() {
      return this.images.map(image => image.url);
    }
  }
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-left: 15px;
  margin-top: 10px;
}
.image:hover {
  cursor: pointer;
}
</style>

<template>
  <div>
    <gallery :images="urlList" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in urlList"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px', }"
    ></div>
  </div>
</template>

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
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>


 <template>
  <div>
    <h2>This is the Gallery Viewer component</h2>
    <gallery :images="urlList" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in urlList"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
      
        index: null
      };
    },
    props: ['images'],
    computed: {
      urlList() {
        return this.images.map(image => image.url);
      },
    },
    components: {
      'gallery': VueGallery
    },
  }
</script> 
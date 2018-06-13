 <template>
  <div class="gallery">
    <h2>Gallery View</h2>
    <pre v-if="error">{{ error }}</pre>
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
  import { getImages } from '../services/api';
  
  export default {
    data: function () {
      return {
        images: null,
        index: null,
        error: null
      };
    },
    created() {
      getImages(this.$route.params.id)
        .then(result => {
          this.images = result;
        })
        .catch(err => {
          this.error = err;
        });
    },

    computed: {
      urlList() {
        return this.images ? this.images.map(image => image.url) : null;
      }
    },
    components: {
      'gallery': VueGallery
    }
  }
</script> 
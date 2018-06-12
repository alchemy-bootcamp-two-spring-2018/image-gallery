<template>
  <div>
    <zoom
      v-if="zoomed"
      :handleZoom="handleZoom"
      :selectedImage="selectedImage"
      :images="images"
    />
    <nav>
      <router-link :to="`/albums/${this.$route.params.id}/`">
        Thumbnail View
      </router-link>
      
      <router-link :to="`/albums/${this.$route.params.id}/list`">
        List View
      </router-link>

      <router-link :to="`/albums/${this.$route.params.id}/gallery`">
        Gallery View
      </router-link>

      <router-link :to="`/albums/${this.$route.params.id}/new`">
        Add New Image
      </router-link>

    </nav>
    <router-view
      v-if="images"
      :images="images"
      :handleZoom="handleZoom"
    />
  </div>
</template>

<script>
import Zoom from './Zoom.vue';
import { getImages } from '../services/api';
export default {
  data() {
    return {
      id: this.$route.params.id,
      images: null,
      zoomed: false,
      selectedImage: null
    };
  },
  components: {
    Zoom
  },
  methods: {
    handleZoom(image) {
      this.zoomed = !this.zoomed;
      this.selectedImage = image;
    }
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
nav {
  margin: 13px 0;
}
nav * {
  margin: 0 13px;
}
</style>

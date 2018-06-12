<template>
  <div>
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
    <router-view :images="images"></router-view>
  </div>
</template>

<script>
import { getImages } from '../services/api';
export default {
  data() {
    return {
      id: this.$route.params.id,
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
nav {
  margin: 13px 0;
}
nav * {
  margin: 0 13px;
}
</style>

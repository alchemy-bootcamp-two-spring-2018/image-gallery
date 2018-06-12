<template>
  <div>
    <transition name="fade">
      <zoom
        v-if="zoomed"
        :handleZoom="handleZoom"
        :selectedImage="selectedImage"
        :zimages="images"
        :zoomed="zoomed"
      />
    </transition>
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
    <transition mode="out-in" name="fade">
      <router-view
        v-if="images"
        :images="images"
        :handleZoom="handleZoom"
      />
    </transition>
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
      this.selectedImage = this.images.findIndex(a => a.id === image);
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
  padding: 23px;
  margin: 0;
  background-color: rgba(0, 0, 0, .69);
  display: flex;
  justify-content: space-around;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;

}
nav * {
  /* margin: 0 13px; */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
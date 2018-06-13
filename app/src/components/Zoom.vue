<template>
    <div>
      <div id="zoom-main"
        @click.self="handleZoom"
      >
        <div id="container-zoom">
            <gallery
              :images="zimages"
              :selectedImage="selectedImage"
            />
        </div>
      </div>
    </div>
</template>

<script>
import Gallery from './Gallery.vue';
export default {
  components: {
    Gallery
  },
  created() {
    // document.body.addEventListener('keydown', e => {
    //   if(e.keyCode === 27 && this.zoomed) {
    //     this.handleZoom();
    //  }
    // });
  },
  props: {
    handleZoom: {
      type: Function,
      required: true
    },
    zimages: Array,
    selectedImage: Number,
    zoomed: Boolean
  }
};
</script>

<style scoped>
#container-buttons {
  display: flex;
  justify-content: space-between;
}

#zoom-main {
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, .69);
  width: 100%;
  height: 100%;
  z-index: 0;
  margin: 0;
}

#container-zoom {
    display: flex;
    flex-direction: column;
    margin: auto;
    display: flex;
    width: fit-content;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
}

h1 {
    font-size: 4rem;
    margin: auto;
}

img {
    height: auto;
    width: 400px;
}

#stats {
    display: flex;
    flex-direction: column;
}
</style>

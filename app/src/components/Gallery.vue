<template>
  <div
    id="container-main"
  >
    <div id="container-sub">
      <a @click.prevent="handlePrevious">Previous</a>
      <a @click.prevent="handleDelete">Delete</a>
      <a @click.prevent="handleNext">Next</a>
    </div>
      <p>{{ images[this.currentImage].title }}</p>
    <transition
      v-if="isNext"
      mode="out-in"
      name="slide-fade-next"
    >
      <img
        :key="images[this.currentImage].id"
        :src="images[this.currentImage].url"
      >
    </transition>
    <transition
      v-else
      mode="out-in"
      name="slide-fade-prev"
    >
      <img
        :key="images[this.currentImage].id"
        :src="images[this.currentImage].url"
      >
    </transition>
    {{ images }}
  </div>
</template>

<script>
import { deleteImage } from '../services/api.js';

export default {
  props: ['images', 'selectedImage'],
  data() {
    return {
      currentImage: 0,
      isNext: true
    };
  },
  methods: {
    handlePrevious() {
      if(this.currentImage > 0) {
        this.currentImage--;
        this.isNext = false;
      }
    },
    handleNext() {
      if(this.currentImage < this.images.length - 1) {
        this.currentImage++;
        this.isNext = true;
      }
    },
    handleDelete() {
      deleteImage(this.images[this.currentImage].id)
        .then(res => {
          if(res.removed) {
            // this.images.splice(this.images[this.currentImage], 1); // remove image from the server
            this.images.splice(this.images.findIndex(a => a.id === this.images[this.currentImage].id), 1); // remove image from server AND client
            // this.images.splice(this.images.indexOf(this.images[this.currentImage]), 1); // another way of removing image
          }
        });
    }
  },
  created() {
    if(this.selectedImage) {
      this.currentImage = this.selectedImage;
    }
  }
};
</script>
<style scoped>

#container-main {
  background-color: lightsteelblue;
  width: 250px;
  margin: auto;
  padding: 6px;
  border-top: 3px solid gray;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  border-left: 3px solid gray;
}

#container-sub {
  display: flex;
  justify-content: space-between;
}
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
img {
  width: 100%;
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

.slide-fade-prev-enter-active, .slide-fade-next-enter-active {
  transition: all .3s ease;
}
.slide-fade-prev-leave-active, .slide-fade-next-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-next-enter, .slide-fade-prev-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
.slide-fade-next-leave-to, .slide-fade-prev-enter {
  transform: translateX(-200px);
  opacity: 0;
}

</style>

<template>
  <div
    id="container-main"
  >
    <div id="container-sub">
      <a @click.prevent="handlePrevious">Previous</a>
      <a @click.prevent="handleNext">Next</a>
    </div>
      <p>{{ images[this.currentImage].title }}</p>
    <transition mode="in-out" name="fade">
      <img :src="images[this.currentImage].url">
    </transition>
  </div>
</template>

<script>
export default {
  props: ['images', 'selectedImage'],
  data() {
    return {
      currentImage: 0
    };
  },
  methods: {
    handlePrevious() {
      if(this.currentImage > 0) {
        this.currentImage--;
      }
    },
    handleNext() {
      if(this.currentImage < this.images.length - 1) {
        this.currentImage++;
      }
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
</style>

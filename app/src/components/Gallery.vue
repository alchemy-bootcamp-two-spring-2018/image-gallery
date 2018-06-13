<template>
  <div id="container-main">

    <div
      v-if="editing"
      id="container-editing"
    >
      Title: <input v-model="tempImage.title">
      URL: <input v-model="tempImage.url">
      Description: <textarea v-model="tempImage.description"></textarea>
    </div>

    <div
      v-else
      id="container-view"
    >
      <div id="container-sub">
        <a @click.prevent="handlePrevious">Previous</a>
        <a @click.prevent="handleNext">Next</a>
      </div>
        <p>{{ currentImage.title }}</p>
    </div>

    <transition
      v-if="isNext"
      mode="out-in"
      name="slide-fade-next"
    >
      <img
        :key="currentImage.id"
        :src="currentImage.url"
      >
    </transition>
    <transition
      v-else
      mode="out-in"
      name="slide-fade-prev"
    >
      <img
        :key="currentImage.id"
        :src="currentImage.url"
      >
    </transition>

    <div v-if="!editing">
      {{ currentImage.description }}
    </div>

    <div id="container-sub">
      <a v-if="editing" @click.prevent="toggleEdit">Cancel</a>
      <a v-else @click.prevent="toggleEdit">Edit</a>
      <a v-if="editing" @click.prevent="handleEdit">Save</a>
      <a v-else @click.prevent="handleDelete">Delete</a>
    </div>
  </div>
</template>

<script>
import { deleteImage, updateImage } from '../services/api.js';

export default {
  props: ['images', 'selectedImage'],
  data() {
    return {
      currentCount: 0,
      isNext: true,
      currentImage: null,
      tempImage: {},
      editing: false
    };
  },
  methods: {
    handlePrevious() {
      if(this.currentCount > 0) {
        this.currentCount--;
        this.currentImage = this.images[this.currentCount];
        this.isNext = false;
      }
    },
    handleNext() {
      if(this.currentCount < this.images.length - 1) {
        this.currentCount++;
        this.currentImage = this.images[this.currentCount];
        this.isNext = true;
      }
    },
    handleDelete() {
      if(confirm('Are you sure you want to delete this picture?')) {
        deleteImage(this.currentImage.id)
          .then(res => {
            if(res.removed) {
              this.images.splice(this.images.findIndex(a => a.id === this.currentImage.id), 1); // remove image from server AND client
              this.currentImage = this.images[this.currentCount];
              if(!this.currentImge) {
                this.$router.push('/albums');
              }
            }
          });
      }
    },
    toggleEdit() {
      this.tempImage = this.currentImage;
      this.editing = !this.editing;
    },
    handleEdit() {
      updateImage(this.tempImage)
        .then(res => {
          if(res.updated) {
            this.currentImage = this.tempImage;
            this.images[this.currentCount] = this.currentImage;
            this.editing = false;
          }
        });
    }
  },
  created() {
    if(this.selectedImage) {
      this.currentImage = this.images[this.selectedImage];
    } else {
      this.currentImage = this.images[0];
    }
    if(this.selectedImage) {
      this.currentCount = this.selectedImage;
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

<template>
  <div>
    <h2>
      This is the NEW IMAGE component
    </h2>

    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input type="text" placeholder="Title" required v-model="image.title">
      </label>

      <label>
        Description:
        <input type="text" placeholder="Description" required v-model="image.description">
      </label>

      <label>
        Image URL:
        <input type="text" placeholder="Image URL" required v-model="image.url">
      </label>
      <button type="submit">Add Image</button>
    </form>
  </div>
</template>

<script>
import { addImage } from '../services/api';

const initImage = () => {
  return {
    title: '',
    albumId: '',
    description: '',
    url: ''
  };
};

export default {
  data() {
    return {
      edit: this.image ? Object.assign({}, this.image) : initImage()
    };
  },

  methods: {
    handleSubmit(image) {
      image.albumId = this.albumId;
      return addImage(image)
        .then(saved => {
          this.images.push(saved);
          this.$router.push('/albums/${this.albumId}');
        });
    }
  }
};
</script>

<style>

</style>

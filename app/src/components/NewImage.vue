<template>
  <div>
    <h2>
      This is the NEW IMAGE component
    </h2>

    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input name="title" type="text" placeholder="Title" required v-model="image.title">
      </label>

      <label>
        Description:
        <textarea name="description" placeholder="Description" required v-model="image.description"></textarea>
      </label>

      <label>
        Image URL:
        <input name="url" type="text" placeholder="Image URL" required v-model="image.url">
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

  created() {
    this.image.albumId = this.$route.params.id;
  },

  methods: {
    handleSubmit() {
      return addImage(this.image)
        .then(() => {
          this.$router.push('/albums/${this.image.albumId}');
        });
    }
  }
};
</script>

<style>

</style>

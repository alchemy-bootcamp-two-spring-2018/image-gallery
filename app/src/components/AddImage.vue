<template>
  <div id="add-image">
    <h2>Add a New Image</h2>
    <section>
    <form @submit.prevent="handleSubmit">
      <label>
        <strong>Title: </strong>
        <input type="text" name="title" placeholder="title" required
          v-model="image.title">
      </label>

      <label>
        <strong>URL: </strong>
        <input type="text" name="url" placeholder="https://placeimg.com/400/400/animals" required
          v-model="image.url">
      </label>

      <label>
        <strong>Description: </strong><br>
        <textarea name="description" rows="8" cols="40" required 
          v-model="image.description"></textarea>
      </label>
   
      <label>
        <button type="submit">add</button>
        <button
          v-on:click="handleCancel"
        >cancel</button>
      </label>
    </form>
  </section>


  </div>
</template>

<script>
import { addImage } from '../services/api';

export default {
  data() {
    return {
      image: {
        title: '',
        description: '',
        url: '',
        albumId: null
      }
    };
  },
  created() {
    this.image.albumId = this.$route.params.id
  },
  methods: {
    handleSubmit() {
        return addImage(this.image)
        .then(() => {
          this.$router.push(`/albums/${this.image.albumId}`);
        });
    },
    handleCancel() {
      this.$router.push(`/albums/${this.image.albumId}`);
    }
  }
};
</script> 

<style>

</style>

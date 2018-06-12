<template>
  <div id="container-add">
    <h4>Add a new image</h4>
    <form @submit.prevent="handleAdd">
      <label>
        URL:
        <input type="text" name="url" required
          v-model="newImage.url"
        >
      </label>
      <label>
        Title:
        <input
          v-model="newImage.title"
          type="text"
          name="title"
          required
        >
      </label>
      <label>
        Description:
        <textarea
          v-model="newImage.description"
          type="text"
          name="description"
          required
        />
      </label>
     <input type="submit">
    </form>
    <img :src="newImage.url">
    <div id="message"></div>
  </div>
</template>

<script>
import { addImage } from '../services/api.js';

export default {
  data() {
    return {
      newImage: {}
    };
  },
  props: ['images'],
  methods: {
    handleAdd() {
      this.newImage.albumid = this.$route.params.id;
      return addImage(this.newImage)
        .then((result) => {
          this.images.push(result);
          this.newImage = {};
          document.getElementById("message").textContent = "Image sucessfully added!";
        });
    }
  }

};
</script>

<style scoped>
#container-add {
  color: white;
}
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: auto;
}
form * {
  margin: 3px 0;
}
img {
  width: 200px;
  height: auto;
}
</style>

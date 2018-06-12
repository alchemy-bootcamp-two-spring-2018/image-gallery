<template>
  <div>
    <h4>Add a new image</h4>
    <label>
      URL:
      <input type="text" name="name" required
        v-model="newImage.url"
      >
    </label>
    <button @click="handleAdd">Add</button>
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
      this.newImage.id = this.$route.params.id;
      this.newImage.title = 'test';
      this.newImage.description = 'hello world';
      return addImage(this.newImage)
        .then((result) => {
          this.images.push(result);
          this.newImage.url = '';
        });
    }
  }

};
</script>

<style scoped>

</style>

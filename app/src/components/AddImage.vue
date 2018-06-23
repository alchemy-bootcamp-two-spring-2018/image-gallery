<template>
  <div>
    <h1>Add New Image</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        URL:
        <input v-model="newImage.url" type="text" required>
      </label>
      <label>
        Title:
        <input v-model="newImage.title" type="text" required>
      </label>
      <label>
        Description:
        <textarea v-model="newImage.description"></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
    <pre>{{ error }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newImage: {
        url: '',
        title: '',
        description: ''
      },
      error: null
    };
  },

  props: ['onAdd'],

  methods: {
    handleSubmit() {
      this.error = null;
      this.onAdd(this.newImage)
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>

<style>

</style>


<template>
  <div>
    <h1>Add Album</h1>
    <pre v-if="error">{{ error }}</pre>
    <form @submit.prevent="handleAdd">
      <label>
        Title:
        <input type="text" required v-model="newAlbum.title">
      </label>
      <label>
        Description:
        <textarea rows="4" cols="40" required v-model="newAlbum.description"></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { addAlbum } from '../services/api';
export default {
  data() {
    return {
      newAlbum: {
        title: '',
        description: ''
      },
      error: null
    };
  },
  props: ['album'],
  methods: {
    handleAdd() {
      return addAlbum(this.newAlbum)
        .catch(err => {
          this.error = err;
        })
        .then(saved => {
          this.$router.push(`/albums/${saved.id}`);
        });
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>


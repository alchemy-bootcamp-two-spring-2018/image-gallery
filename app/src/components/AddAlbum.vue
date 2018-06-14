<template>
  <div id="add-album">
    <h2>Add a New Album</h2>
    <section>
      <form @submit.prevent="handleSubmit">
        <label>
          <strong>Title: </strong>
          <input type="text" name="title" placeholder="title" required
            v-model="album.title">
        </label><br/>

        <label>
          <strong>Description: </strong><br>
          <textarea name="description" rows="8" cols="40" required 
            v-model="album.description"></textarea>
        </label><br/>
    
        <label>
          <button type="submit">add</button>
          <button
            v-on:click="handleCancel"
          >cancel</button>
        </label>
      </form>
      <pre>{{ error }}</pre>
    </section>
  </div>
</template>

<script>
import { addAlbum } from '../services/api';

export default {
  data() {
    return {
      album: {
        title: '',
        description: ''
      },
      error: null
    };
  },
  methods: {
    handleSubmit() {
      this.error = '';
      return addAlbum(this.album)
      .then(result => {
        this.$router.push(`/albums/${result.id}`);
      })
      .catch(err => {
          this.error = err;
      });
    },
    handleCancel() {
      this.$router.push(`/albums`);
    }
  }
};
</script> 

<style>

</style>

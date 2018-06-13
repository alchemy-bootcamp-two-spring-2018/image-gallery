<template id="album-template">
  <section class="album-form">
      <h2>Add an Album</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Album Tite:
        <input type="text" name="name" placeholder="Name" required
          v-model="album.title">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="album.description"></textarea>
      </label>
      
      
      <label>
        <button type="submit">Add</button>
      </label>

    </form>
  </section>
</template>

<script>
import { addAlbum } from '../services/api';

export default {
  data() {
    return {
      album: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      return addAlbum(this.album)
        .then(saved => {
          this.$router.push(`/albums/${saved.id}`);
        });
    }
  }
};
</script>

<style scoped>


.image-form {
  width: 300px;
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  font-size: 18px;
}
button {
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
}
input {
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
}
label {
  display: block;
 
}

</style>
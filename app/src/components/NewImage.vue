<template>
  <div>
    <h2>
      This is the NEW IMAGE component
    </h2>
    <section>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input name="title" type="text" placeholder="Title">
      </label>

      <label>
        Description:
        <textarea name="description" placeholder="Description"></textarea>
      </label>

      <label>
        Image URL:
        <input name="url" type="text" placeholder="Image URL">
      </label>
      <button type="submit">Add Image</button>
    </form>
    </section>
  </div>
</template>

<script>
import { addImage } from '../services/api';

export default {
  data() {
    return {
      title: '',
      albumId: null,
      description: '',
      url: ''
    };
  },

  // created() {
  //   this.image.albumId = this.$route.params.id;
  // },

  // methods: {
  //   handleSubmit() {
  //     return addImage(this.image)
  //       .then(() => {
  //         this.$router.push('/albums/${this.image.albumId}');
  //       });
  //   }
  // }
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column nowrap;
}
button {
  width: 85px;
}
label {
  text-align: left;
  margin: 10px;
}


</style>

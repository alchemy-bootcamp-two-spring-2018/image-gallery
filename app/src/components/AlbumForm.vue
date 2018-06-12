<template>
  <section class="album-form">
    <form @submit.prevent="handleSubmit">
      <label>
        Title: 
        <input type="text"  placeholder="Title" required
          v-model="change.title">
      </label>
      <label>
        Description: 
        <textarea placeholder="Description" required
          rows="8" cols="40"
          v-model="change.description"></textarea>
      </label>
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initAlbum = () => {
  return {
    title: '',
    description: ''
  };
};
export default {
  data() {
    return {
      change: this.album ? Object.assign({}, this.album) : initAlbum()
    };
  },
  props: ['album', 'onChange'],
  methods: {
    handleSubmit(){
      return this.onChange(this.change)
        .then(() => {
          this.change = initAlbum;
        });
    }
  }
};
</script>

<style>

</style>

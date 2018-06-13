<template>
  <section class="image-form">
    <form @submit.prevent="handleSubmit">
      <label>
        Title: 
        <input type="text"  placeholder="Title" required
          v-model="change.title">
      </label>
      <label>
        Image Url: 
        <input type="text"  placeholder="Url" required
          v-model="change.url">
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
const initImage = () => {
  return {
    title: '',
    description: '', 
    url: ''
  };
};
export default {
  data() {
    return {
      change: this.image ? Object.assign({}, this.image) : initImage()
    };
  },
  props: ['image', 'onChange'],
  methods: {
    handleSubmit() {
      return this.onChange(this.change)
        .then(() => {
          this.change = initImage;
        });
    }
  }
};
</script>

<style>

</style>

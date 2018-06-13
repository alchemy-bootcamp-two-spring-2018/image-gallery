<template>
  <section class="image-form">
    <form @submit.prevent="handleSubmit" class="add-form">
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
export default {
  data() {
    return {
      change: {
        title: '',
        description: '',
        url: ''
      }
    };
  },
  props: ['image', 'onChange'],
  methods: {
    handleSubmit() {
      this.onChange(this.change);

    }
  }
};
</script>

<style>
label {
  display: block;
  margin: 4px;
}

.add-form {
  width: 300px;
  text-align: left;
  margin: auto;
  margin-top: 100px;
}
</style>

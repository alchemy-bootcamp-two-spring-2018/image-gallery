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
export default {
  data() {
    return {
      change: {
        title: '', 
        description: '' }
    };
  },

  props: ['album', 'onChange'],
  methods: {
    handleSubmit(){
      this.onChange(this.change);
    }
  }
};
</script>

<style>

</style>

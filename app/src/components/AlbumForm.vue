<template>
  <div>
    <h1>Add Album</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input type="text" required v-model="change.title">
      </label>
      <label>
        Description:
        <textarea rows="4" cols="40" required v-model="change.description"></textarea>
      </label>
      <button type="submit">Add</button>
    </form>
  </div>
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
    handleSubmit() {
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


<template>
  <div>
    <h2>
      This is the NEW IMAGE component
    </h2>
    <section>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input name="title" type="text" placeholder="Title" required v-model="image.title">
      </label>

      <label>
        Description:
        <textarea name="description" placeholder="Description" required v-model="image.description"></textarea>
      </label>

      <label>
        Image URL:
        <input name="url" type="text" placeholder="https://github.com/..." required v-model="image.url">
      </label>
      <button type="submit">Add Image</button>
    </form>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      image: {
        title: '',
        description: '',
        url: ''
      }
    };
  },

  props: ['onAdd'],

  methods: {
    handleSubmit() {
      this.onAdd(this.image);
    }
  }


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

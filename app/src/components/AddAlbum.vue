<template>
  <div>
    <h2>
      This is the NEW ALBUM component
    </h2>
    <section>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input name="title" type="text" placeholder="Title" required v-model="album.title">
      </label>

      <label>
        Description:
        <textarea name="description" placeholder="Description" required v-model="album.description"></textarea>
      </label>

    
      <button type="submit">Add Album</button>
    </form>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      album: {
        title: '',
        description: '',
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

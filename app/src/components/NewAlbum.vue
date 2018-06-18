<template>
  <div id="container-add">
    <h4>Add a new album</h4>
    <form @submit.prevent="submitAdd">
      <label>
        Title:
        <input
          v-model="newAlbum.title"
          type="text"
          name="title"
          required
        >
      </label>
      <label>
        Description:
        <textarea
          v-model="newAlbum.description"
          type="text"
          name="description"
          required
        />
      </label>
     <input type="submit">
    </form>
    <div id="message"></div>
    {{ albums }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      newAlbum: {}
    };
  },
  props: {
    albums: Array,
    handleAdd: {
      type: Function,
      required: true
    }
  },
  methods: {
    submitAdd() {
      this.handleAdd(this.newAlbum);
    }
  }
};
</script>

<style scoped>
#container-add {
  color: white;
}
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: auto;
}
form * {
  margin: 3px 0;
}
img {
  width: 200px;
  height: auto;
}
</style>

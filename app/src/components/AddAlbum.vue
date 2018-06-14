<template>
  <div>
    <h1>Add Album</h1>
    
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Album Name" v-model="newAlbum.decade">
      &nbsp;

      <input type="text" placeholder="Description" v-model="newAlbum.description">
      &nbsp;

      <button type="submit">Submit</button>
    </form>
    
  </div>
</template>

<script>
export default {

  data() {
    return {
      newAlbum: {
        decade: null,
        description: null
      }
    };
  },

  props: ['onPost'],

  methods: {
    handleSubmit() {
      this.onPost(this.newAlbum);
    }
  },

}
</script>

<style>

</style>

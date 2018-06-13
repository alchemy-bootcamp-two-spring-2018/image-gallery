<template>
  <section class="record-form">
    <h2>Add a {{ genre.title }} record!</h2>
    <form @submit.prevent="handleSubmit">
      <label> Record Title:
      <input type= "text" name="title" required
        v-model="record.title">
      </label>

      <!-- <label> Record Genre:</label>
      <select v-model="record.genre_id">
        <option :value="genre.id">{{ genre.title }}</option>
      </select> -->
     

      <label> Artist:
      <input type= "text" name="artist" required
        v-model="record.artist">
      </label>

      <label> Record description:
      <input type= "text" name="description" required
        v-model="record.description">
      </label>

      <label> Record Cover Image URL:
      <input type= "text" name="cover" required
        v-model="record.cover">
      </label>
      <button type="submit">Add</button>
    </form>
  </section>
  
</template>

<script>

const initRecord = () => {
  return {
    title: '',
    genre_id: '',
    artist: '',
    description: '',
    cover: ''
  };
};

export default {
  data() {
    return {
      record: initRecord()
    };
  },
  props: {
    onAdd: Function,
    genre: Object
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.record, this.genre)
      .then(() => {
        this.record = initRecord();
      });
    }
  }
};
</script>

<style>

.record-form {
  width: 400px;
  text-align: left;
}

label {
  display: block;
  margin-top: 10px;
}

</style>

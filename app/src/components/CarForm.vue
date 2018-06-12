<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label> 
        Make:
        <input type="text" placeholder="Car Make" required v-model="edit.make">
      </label>

      <label>
        Model:
        <input type="text" placeholder="Model" required v-model="edit.model">
      </label>

      <label>
        Image:
        <input type="text" placeholder="Image URL" v-model="edit.imageUrl">
      </label>

    </form>
  </section>
</template>

<script>

const initImages = () => {
  return {
    make: '',
    model: '',
    imageUrl: ''
  };
};

export default {
  data() {
    return {
      edit: this.image ? Object.assign({}, this.image) : initImage()
    };
  },

  props: {
    decade: Object,
    image: Object,
    onEdit: {
      type: Function,
      required: true
    }
  },

  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        .then(() => {
          this.edit = initImage();
        });
    }
  }
};

</script>

<style>

</style>

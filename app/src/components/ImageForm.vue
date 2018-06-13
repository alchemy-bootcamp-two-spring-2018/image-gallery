<template id="image-template">
  <section class="image-form">
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Image URL:
        <input type="text" name="url" placeholder="URL" required
          v-model="edit.url">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="edit.description"></textarea>
      </label>
      
      
      <label>
        <button type="submit">{{ label }}</button>
        <button 
          v-if="onCancel"
          @click="onCancel">
          Cancel
        </button>
      </label>

    </form>
  </section>
</template>

<script>
const initImage = () => {
  return {
    name: '',
    url: '',
    description: ''
  };
};
export default {
  props: {
    image: Object,
    albums: Array,
    label: String,
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  data() {
    return {
      edit: this.image ? Object.assign({}, this.image) : initImage()
    };
  },
  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initImage();
        });
    }
  }
};
</script>

<style scoped>


.image-form {
  width: 300px;
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  font-size: 18px;
}
button {
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
}
input {
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
}
label {
  display: block;
 
}

</style>
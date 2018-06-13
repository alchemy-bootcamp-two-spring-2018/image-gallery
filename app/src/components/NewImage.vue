<template>
  <section>
    <ImageForm 
      label="Add"
      :on-edit="onAdd"/>
  </section>
</template>

<script>
import ImageForm from './ImageForm.vue';
export default {
  props: ['onAdd'],
  components: { 
    ImageForm
  }
};

</script>

<style>

</style>

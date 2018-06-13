<template>
  <section>
    <RecordForm 
      label="Add"
      :on-add="onAdd"
      :genre="genre"
      />
  </section>
</template>

<script>
import RecordForm from './RecordForm';

export default {
  props: ['onAdd', 'genre'],
  components: {
    RecordForm
  }
};
</script>

<style>

</style>

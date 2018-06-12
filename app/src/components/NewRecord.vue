<template>
  <section>
    <RecordForm 
      label="Add"
      :on-add="onAdd"/>
  </section>
</template>

<script>
import RecordForm from './RecordForm';

export default {
  props: ['onAdd'],
  components: {
    RecordForm
  }
};
</script>

<style>

</style>

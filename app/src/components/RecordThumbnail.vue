<template>
  <div>
    <h2>This is the Thumbnail!</h2>
    <div
      v-for="(record, index) in records"
      :key="record.id"
    >
      <p>{{ records[index].title }}</p>
      <img 
      :src="records[index].cover"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

</style>

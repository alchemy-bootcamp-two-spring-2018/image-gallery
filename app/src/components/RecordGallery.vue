<template>
  <div>
    <h2>This is the gallery!</h2>
    <p>{{ records[0].title }}</p>
    <p>{{ records[0].artist }}</p>
    <img 
    :src="records[0].cover"
    >
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

</style>

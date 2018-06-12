<template>
  <div>
    <h2>This is the Thumbnail!</h2>
    <img :src="records.cover">
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

</style>

<template>
  <div>
    <h2>This is the Thumbnail!</h2>
    <div
      v-for="(record, index) in records"
      :key="record.id"
    >
      <img 
      :src="records[index].cover"
      >
      &nbsp;
    </div>
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

div {
  display: inline;
}

</style>

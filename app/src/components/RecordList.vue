<template>
  <div>
    <h2>The list component!</h2>
    <ul>
      <li
      v-for="record in records"
      :key="record.id"
      >{{ record.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

</style>

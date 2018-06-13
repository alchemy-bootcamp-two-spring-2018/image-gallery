<template>
  <div>
    <h2>
      This is the LIST VIEWER component
    </h2>

    <ul v-if="images">
      <li
      v-for="image in images"
      :key="image.id"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['images']
};
</script>

<style>

</style>

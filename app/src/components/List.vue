<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <div>{{ image.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['images']
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>

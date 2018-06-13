<template>
  <div class="list-viewer-content">
    <ul v-if="images">
      <li
      v-for="image in images"
      :key="image.id"
      >
      <img :src="image.url">
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
.list-viewer-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: auto;
}
ul {
  margin-left: -40px;
}
img {
  width: 200px;
}
</style>

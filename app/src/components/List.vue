<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <a @click.prevent="handleZoom(image.id)">{{ image.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    handleZoom: {
      type: Function,
      required: true
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
li {
  padding: 13px 0;
}
</style>

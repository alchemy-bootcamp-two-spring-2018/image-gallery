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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
}
li {
  margin: 13px 3px;
}
</style>

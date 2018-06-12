<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <p>{{ image.title }}</p>
        <img
          :src="image.url"
          :alt="image.title"
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
<style scoped>
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 3px;
  padding: 6px;
  border-top: 3px solid gray;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  border-left: 3px solid gray;
}
img {
  height: 100px;
  width: auto;
}
</style>

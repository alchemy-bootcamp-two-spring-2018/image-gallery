<template>
  <div>
    <ul>
      <li
        v-for="image in images"
        :key="image.id"
      >
        <a @click.prevent="handleZoom(image.id)">
          <p>{{ image.title }}</p>
          <img
            :src="image.url"
            :alt="image.title"
          >
        </a>
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
a, a:hover, a:focus {
  border: none;
  padding: none;
  margin: none;
  background: none;
  color: black;
}
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

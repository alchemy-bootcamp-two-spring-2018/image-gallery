<template>
  <div>
    <ul v-if="images">
      <span class="links">
      <li
      v-for="image in images"
      :key="image.id"
      >
     <router-link :to="`/gallery/${image.id}`">
      {{ image.title }}</router-link>:
      {{ image.description }}
      </li>
      </span>
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
  list-style-type: none;
  text-align: left;
}
li {
  margin: 5px;
}
.links {
  width: 700px;
}
</style>

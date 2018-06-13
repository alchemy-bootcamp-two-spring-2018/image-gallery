<template>
  <div>
    <ul v-if="images">
      <span class="links">
      <p
      v-for="image in images"
      :key="image.id"
      >
      <router-link :to="`/gallery/${image.id}`">
      {{ image.title }}
      </router-link>
      </p>
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
img {
  width: 120px;
}
p {
  display: inline;
  flex-flow: column wrap;
  overflow: auto;
  margin: 5px;
  overflow: auto;
}
.links {
  width: 700px;
}
</style>

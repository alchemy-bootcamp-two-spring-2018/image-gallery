<template>
  <div id="list-viewer">
    <h2>This is the List Viewer component</h2>
    <ul v-if="images !== null">
      <li
        v-for="image in images"
        :key="image.id"
      >
        <img v-bind:src="image.url"/><br/>
        <strong>{{ image.title }}</strong><br/>
        {{ image.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getImages } from '../services/api';

export default {
    data() {
      return {
        images: null
      };
    },
    created() {
      getImages(this.$route.params.id)
        .then(result => {
          this.images = result;
        });
    }

}
</script>

<style>

</style>

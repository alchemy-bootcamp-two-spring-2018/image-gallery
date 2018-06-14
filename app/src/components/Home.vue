<template>
  <div v-if="album">
    <h2>I'm the Home Component</h2>
    <h4>We have this many ablums ({{ album.length }})</h4>
    <h4>Most images in an album ({{ albumStats[0].max }})</h4>
    <h4>Least amount of images per album ({{ albumStats[0].min }})</h4>
    <h4>Average amount of images per album ({{ albumStats[0].avg }})</h4>
    <p>
      Click <router-link to="/albums">here</router-link> to get started!
    </p>
  </div>
</template>

<script>

export default {
  props: ['album', 'albumStats']
};
</script>

<style>

</style>

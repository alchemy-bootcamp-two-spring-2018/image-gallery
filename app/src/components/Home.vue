<template>
  <div v-if="album">
    <h2>I'm the Home Component</h2>
    <h4>We have this many ablums {{ album.length }}</h4>
    <p>
      Click <router-link to="/albums">here</router-link> to get started!
    </p>
  </div>
</template>

<script>

export default {
  props: ['album', 'albumstats']
};
</script>

<style>

</style>

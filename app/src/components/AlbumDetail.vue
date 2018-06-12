<template>
  <div>
    <div>
      In the deets
      {{ id }}
    </div>
    <nav>
      <router-link :to="`/albums/${this.$route.params.id}/`">Thumbnail View</router-link>
      <router-link :to="`/albums/${this.$route.params.id}/list`">List View</router-link>
      <router-link :to="`/albums/${this.$route.params.id}/gallery`">Gallery View</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAlbums } from '../services/api.js';

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
};
</script>

<style scoped>
nav * {
  margin: 0 33px;
}
</style>

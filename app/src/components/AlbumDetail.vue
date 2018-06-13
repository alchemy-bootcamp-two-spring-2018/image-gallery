<template>
  <div v-if="decade">
    <h1>AlbumDetail Component</h1>
    <h2>{{ decade.description }}</h2>

    <nav>
      <router-link :to="`/albums/${decade.id}/list`">List</router-link>
      &nbsp;
      <router-link :to="`/albums/${decade.id}/gallery`">Gallery</router-link>
      &nbsp;
      <router-link :to="`/albums/${decade.id}/thumbnail`">Thumbnail</router-link>
      &nbsp;
      <router-link :to="`/albums/${decade.id}/new`">New Image</router-link>
      
    </nav>

    <router-view 
      :cars="decade.images"
      :decadeId="decade.id"
    >
    </router-view>
  </div>
</template>

<script>
import { getDecade } from '../services/api';
import { getImages } from '../services/api';

export default {
  data() {
    return {
      decade: null
    };
  },

  created() {
    getDecade(this.$route.params.id)
      .then(decade => {
        this.decade = decade;
      });
  }

};
</script>

<style>

</style>

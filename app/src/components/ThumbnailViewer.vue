<template>
  <div id="thumbnail-viewer">
    <h2>Thumbnail View</h2>
    <pre v-if="error">{{ error }}</pre>
    <div v-if="images !== null">
      
        <div class ="container"
          v-for="image in images"
          :key="image.id">
          <img class="thumbnail-image" v-bind:src="image.url" :title="image.title"/> 
          <p><strong>{{ image.title }}</strong></p>
        </div>  
      
    </div>
  </div>
</template>

<script>
import { getImages } from '../services/api';

export default {
    data() {
      return {
        images: null,
        error: null
      };
    },
    created() {
      this.error = '';
      getImages(this.$route.params.id)
        .then(result => {
          this.images = result;
        })
        .catch(err => {
          this.error = err;
        });
    }

}
</script>

<style scoped>
p {
  display: inline-block;
  width: 300px;
}

img {
  
  margin: 5px;
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  
}

strong {
  font-size: 22px;

}
.container {
  background-color: rgb(177, 171, 171);
  border: 1px solid red;
  font-size: 18px;
  max-width: 300px;
  display: inline-block;
  padding: 15px;
  min-width: 200px;
  margin: 15px;

}

</style>

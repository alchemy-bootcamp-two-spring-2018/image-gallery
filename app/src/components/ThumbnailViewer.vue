<template>
  <div id="thumbnail-viewer">
    <h2>Thumbnail View</h2>
    <pre v-if="error">{{ error }}</pre>
    <div v-if="images !== null">
      
        <div class ="container"
          v-for="image in images"
          :key="image.id">
          <img class="thumbnail-image" v-bind:src="image.url" :title="image.title"/> 
          <p>{{ image.title }}</p>
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


img {
  
  margin: 5px;
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  
}
.container {
  background-color: rgb(216, 214, 214);
  border: 1px solid rgba(0, 0, 0, .3);
  font-size: 18px;
  max-width: 230px;
  display: inline-block;
  padding: 10px;
  margin: 15px;
  -webkit-box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.38);
  -moz-box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.38);
  box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.38);
}
.container p {
  margin-top: 0px;
}

</style>

<template>
  <div id="thumbnail-viewer">
    <h2>This is the Thumbnail Viewer component</h2>
  <div v-if="images !== null">
    <div class="container">
      <div class ="thumbnail-image"
        v-for="image in images"
        :key="image.id"
      >
        <img v-bind:src="image.url" :title="image.title"/> 
        <p><strong>{{ image.title }}</strong></p>
        </div>  
        
        
      </div>
      </div>
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

<style scoped>
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
  background-color: #333;
  font-size: 18px;
  max-width: 200px;
  display: inline;
  margin: 15px;
  

}

</style>

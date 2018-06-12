<template>
  <div id="list-viewer">
    <h2>This is the List Viewer component</h2>
    <div v-if="images !== null">
      <div class ="list-image"
        v-for="image in images"
        :key="image.id"
      >
        <img v-bind:src="image.url" :title="image.title"/> 
        <p><strong>{{ image.title }}</strong><br>
        {{ image.description }}
      </p>
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
  float: left;
  clear: both;
  margin: 5px;
  width: 50px;
  height: 50px;
  display: inline;
}
.list-image {
  background-color: rgb(182, 247, 211);
  text-align: left;
}
p {
  font-size: 18px;
  
}

</style>

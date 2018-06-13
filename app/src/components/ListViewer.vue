<template>
  <div id="list-viewer">
    <h2>List View</h2>
    <pre v-if="error">{{ error }}</pre>
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
  float: left;
  clear: both;
  margin: 5px;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  display: inline;
}
.list-image {
  margin-left: 10%;
  margin-right: 10%;
  background-color: rgb(182, 247, 211);
  text-align: left;
  height: 60px;
}
strong {
  font-size: 22px;
  font-weight: 700;

}
p {
  margin-top: 5px;
  font-size: 18px;
  font-weight: 300;
}

</style>

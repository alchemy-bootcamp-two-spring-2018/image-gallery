<template>
    <div>
        <h3>I am thumbnails.</h3>
        <ul v-if="images">
            <li
                class="listItems"
                v-for="image in images"
                :key="image.id"
            >
                <div class="card">
                    <img :src="image.url" alt="Pokemon image" style="width:75px">
                    <div class="container">
                        {{ image.name }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['images']

};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  background-color: lightsalmon;
  width: 150px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}


</style>

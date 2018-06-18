<template>
  <div>
    <h3>GENRES</h3>
    <ul v-if="genres">
      <li
        v-for="genre in genres"
        :key="genre.id"
      >
        <router-link :to="`/genres/${genre.id}`"
        :genres="genres"
        >
          {{ genre.title }} | {{ genre.description }} |
          {{ genre.recordsCount }}
          record{{ genre.recordsCount !== 1 ? 's' : '' }}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  
  props:['genres']

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa:300,700|Knewave');

  h3 {
    font-family: 'Comfortaa', sans-serif;
    font-weight: lighter;
    font-size: 100px;
    color: #FFF;
    padding-left: 2%;
    padding-top: 10%;
    padding-right: 2%;
    float: left;
    background-color: rgba(101, 4, 97, 0.331);
  }

  a:-webkit-any-link {
    font-family: 'Comfortaa', sans-serif;
    font-weight: bolder;
    color: lightslategray;
    font-size: 1.2em;
    text-decoration: none;
    color: rgba(77, 24, 75, 0.817);
  }

  ul {
    margin-top: 6%;
  }

  li {
    float: left;
    margin-left: 10%;
    margin-top: 4%;
    list-style-type: none;
  }
</style>

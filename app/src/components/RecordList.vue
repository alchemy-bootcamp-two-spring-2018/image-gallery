<template>
  <div>
    <h3>Album List</h3>
    <ul>
      <li
      v-for="record in records"
      :key="record.id"
      >
      <strong>{{ record.title }}</strong> &nbsp;
      <em>{{ record.artist }}</em> &nbsp;
      {{ record.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['records']

}
</script>

<style>

h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: lightslategray;
}

li {
    float: left;
    margin-left: 10%;
    margin-top: 6%;
    list-style-type: none;
    display: block
  }


</style>

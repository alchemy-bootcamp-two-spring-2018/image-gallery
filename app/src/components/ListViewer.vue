<template>
  <div>
    <h1>List Viewer</h1>
    <table>
      <thead>
        <td>Title</td>
        <td>Descriptiion</td>
      </thead>
      <tbody>
        <tr v-for="image in images" :key="image.id">
         <td>{{ image.title }}</td>
         <td>{{ image.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['images']
};
</script>

<style>

</style>


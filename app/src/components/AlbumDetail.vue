<template>
  <div id="album-detail">
    <h2>This is the Album Detail component</h2>
      <nav>
        <span class = "nav-link"
        <router-link to="list">List View</router-link>
        &nbsp;
        <router-link to="thumbnail">Thumbnail View</router-link>
        &nbsp;
        <router-link to="gallery">Gallery View</router-link>
        &nbsp;
        <router-link to="add-image">Add Image</router-link>
        </span>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

</style>

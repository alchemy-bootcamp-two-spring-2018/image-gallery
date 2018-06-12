<template>
  <div>
    <nav>
      <router-link :to="`/album_info/${album.id}/list`">list</router-link>
      <router-link :to="`/album_info/${album.id}/thumbnail`">thumbnail</router-link>
      <router-link :to="`/album_info/${album.id}/gallery`">gallery</router-link>
      <router-link :to="`/album_info/${album.id}/new`">add a new album</router-link>
    </nav>
    <router-view
      :album-name="album_info.album_name"
    ></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

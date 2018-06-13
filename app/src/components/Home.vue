<template>
  <div id="home">
    <img src="https://i.imgur.com/l0t8axs.jpg">
    <section class="home-text">
      <h1>Commemorate the ones you love</h1>
      <router-link to="/albums/new"><button>Get Started</button></router-link>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#home {
  padding: 100px 0px;
  display: flex;
  align-items: center;
}

h1 {
  margin: 50px;
}

.home-text {
  text-align: center;
}

img {
  width: 40%;
  border-radius: 25px;
}
</style>


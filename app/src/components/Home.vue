<template>
  <div id="home">
    
    <img src="https://i.imgur.com/l0t8axs.jpg">
    <section class="home-text">
      <h1>Commemorate the ones you love</h1>
      <router-link to="/albums/new"><button>Get Started</button></router-link>
    </section>
  
    <div class="stats" @click="shown = !shown">
      <transition name="flip-list">
        <h3>Stats</h3>
      </transition>
      <transition name="slide">
        <section v-if="shown">
          <ul>
            <li>Total albums: {{stats.count}}</li>
            <li>Average memories per album: {{parseInt(stats.avg)}}</li>
            <li>Least amount of memories per album: {{stats.min}}</li>
            <li>Most amount of memories per album: {{stats.max}}</li>
          </ul>
        </section>
      </transition>
    </div>

  </div>
</template>

<script>
import { getStats } from '../services/api';

export default {

  data() {
    return {
      shown: false,
      stats: null
    };
  },

  created() {
    getStats() 
      .then(stats => {
        this.stats = stats;
      });
  }
};
</script>

<style scoped>
#home {
  display: grid;
  grid-template: 300px 300px / 1fr 1fr;
  grid-template-areas:
    "picture words"
    "stats stats"
}

h1 {
  margin: 50px;
}

.home-text {
  grid-area: words;
  text-align: center;
}

img {
  grid-area: picture;
  text-align: center;
  width: 80%;
  border-radius: 25px;
}

li {
  list-style: none;
}

.stats {
  grid-area: stats;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.slide-enter-active {
  transition: all .7s ease;
}
.slide-leave-active {
  transition: all .4s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(50px);
}

.flip-list-move {
  transition: transform 1s;
}
</style>


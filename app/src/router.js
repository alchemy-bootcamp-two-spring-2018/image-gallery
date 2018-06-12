import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Genres from './components/Genres.vue';
import GenreDetail from

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/genres', component: Genres },
  ]
})

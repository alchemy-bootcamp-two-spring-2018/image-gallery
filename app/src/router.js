import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Albums from './components/Albums.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
  ]
})

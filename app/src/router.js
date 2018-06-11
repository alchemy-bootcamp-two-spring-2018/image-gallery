import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import Thumbnail from './components/Thumbnail.vue';
import Gallery from './components/Gallery.vue';
import List from './components/List.vue';
import New from './components/New.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    {
      path: '/albums/:id',
      children: [
        { path: 'thumbnail', component: Thumbnail },
        { path: 'gallery', component: Gallery },
        { path: 'list', component: List },
        { path: 'new', component: New },
        { path: '', redirect: 'thumbnail' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
import VueRouter from 'vue-router';
import Home from './components.Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import DecadesDetail from './components/DecadesList.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    { 
      path: '/albums/:id',
      component: DecadesDetail,
      children: [
        { path: 'list', component: DecadesList },
        // Add 'new' component here
        {path: '', redirect: 'list' }
    ] 
  },
  { path: '*', redirect: '/'}
  ]
});


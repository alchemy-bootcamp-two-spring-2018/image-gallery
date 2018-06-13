import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import Thumbnail from './components/Thumbnail.vue';
import Gallery from './components/Gallery.vue';
import List from './components/List.vue';
import NewImage from './components/NewImage.vue';
import NewAlbum from './components/NewAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    { path: '/newalbum', component: NewAlbum },
    {
      path: '/albums/:id',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: Thumbnail },
        { path: 'gallery', component: Gallery },
        { path: 'list', component: List },
        { path: 'newimage', component: NewImage },
        { path: '', redirect: 'thumbnail' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
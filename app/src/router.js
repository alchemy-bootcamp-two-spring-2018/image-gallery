import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/ListViewer.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    {
      path: '/albums/:id',
      component: AlbumDetail,
      children: [
        { path: 'list', component: ListViewer },
        { path: 'thumbnail', component: ThumbnailViewer},
        { path: 'gallery', component: GalleryViewer},
        { path: '', redirect: 'list' }
      ]
    }, 
    { path: '*', redirect: '/' },
  ]
});
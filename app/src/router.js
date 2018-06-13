import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/ListViewer.vue';
import AddImage from './components/AddImage.vue';
import AddAlbum from './components/AddAlbum.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    { path: '/albums/new', component: AddAlbum },
    {
      path: '/albums/:id',
      component: AlbumDetail,
      props: true,
      children: [
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'list', component: ListViewer },
        { path: 'new', component: AddImage },
        { path: '', redirect: 'thumbnail' }
      ]
    }
  ]
});
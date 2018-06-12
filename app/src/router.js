import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Genres from './components/Genres.vue';
import GenreDetail from './components/GenreDetail.vue';
import RecordList from './components/RecordList';
import RecordGallery from './components/RecordGallery';
import RecordThumbnail from './components/RecordThumbnail';
import NewRecord from './components/NewRecord';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/genres', component: Genres },
    {
      path: '/genres/:id',
      component: GenreDetail,
      children: [
        { path: 'list', component: RecordList },
        { path: 'gallery', component: RecordGallery },
        { path: 'thumbnail', component: RecordThumbnail },
        { path: 'new', component: NewRecord },
        { path: '', redirect: 'list' }
      ]
    },
    { path: '', redirect: '/' }
  ]
});

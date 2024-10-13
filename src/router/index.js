import { createRouter, createWebHistory } from 'vue-router';
import 'font-awesome/css/font-awesome.min.css';
import MyMain from '@/views/MyMain.vue';
import LogIn from '@/views/LogIn.vue';
import AboutPage from '@/views/AboutPage.vue';
import CollegesPage from '@/views/CollegesPage.vue';
const routes = [
  {
    name: 'home',
    path: '/home',
    component: MyMain
  },
  {
    name: 'LogIn',
    path: '/login',
    component: LogIn
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage
  },
  {
    name: 'CollegesPage',
    path: '/colleges',
    component: CollegesPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

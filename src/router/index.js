import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/views/Menu.vue';
import DishDetail from '@/views/DishDetail.vue';
import MyOrder from '@/views/MyOrder.vue';
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/dish/:id',
      name: 'DishDetail',
      component: DishDetail,
    },
    {
      path: '/myorder',
      name: 'MyOrderView',
      component: MyOrder,
    },
  ],
});

export default router;


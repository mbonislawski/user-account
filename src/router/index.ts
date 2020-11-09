import { createRouter, createWebHistory, RouteRecordRaw }         from 'vue-router';
import UserAccountPage                                            from '@/pages/UserAccountPage/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'UserAccountPage',
    component: UserAccountPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

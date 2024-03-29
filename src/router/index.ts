import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import(/* webpackChunkName: "knowledge" */ '@/views/knowledge/index.vue'),
    meta: { knowledge: true },
    redirect: '/knowledge/list',
    children: [
      {
        path: '/knowledge/list',
        name: 'knowledge-list',
        meta: { knowledge: true },
        component: () => import('@/views/knowledge/KnowledgeList.vue'),
      },
      {
        path: '/knowledge/details/:id',
        name: 'knowledge-details',
        meta: { knowledge: true },
        component: () => import('@/views/knowledge/KnowledgeDetails.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

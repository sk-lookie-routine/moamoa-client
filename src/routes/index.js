import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;

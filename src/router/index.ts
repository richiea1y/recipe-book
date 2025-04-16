import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// We can use createRouter function, we assign the result of this function to the router variable.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

export default router;

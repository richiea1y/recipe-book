import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

// We can use createRouter() function, we assign the result of this function to the router variable.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipeView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;

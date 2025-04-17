<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/favorites">Favorites</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

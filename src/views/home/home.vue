<script setup lang="ts">
import bottomDock from './components/bottomDock.vue'
import topBar from './components/topBar.vue'
import listApp from '../components/app/list_app.vue'
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <span class="bg-absolute">
      <img src="@/assets/images/background.jpg" alt="background" class="img-full">
    </span>

    <div class="relative w-full h-full flex flex-col">
      <top-bar />

      <div class="flex-grow relative">
        <router-view />

        <list-app />
      </div>

      <bottom-dock />
    </div>
  </div>
</template>
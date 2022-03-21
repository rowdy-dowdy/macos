<script setup lang="ts">
import img from '/assets/icons/Apple AppStore icon Regular.png'

</script>

<template>
  <div class="h-full flex flex-col justify-center items-center p-4 py-12">
    <img :src="img" alt="" 
      class="w-20 h-20" loading="lazy">
    <h1 class="text-xl font-semibold">App coming soon!</h1>
  </div>
</template>
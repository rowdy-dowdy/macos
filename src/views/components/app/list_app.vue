<script setup lang="ts">
import app from '@/components/app/app.vue'
import { computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore()
const list_app_render = computed(() => store.state.app.list_app.filter(v => v.display == true))

</script>

<template>
  <transition-group name="fade" >
    <app v-for="item in list_app_render" :key="item.id" :item="item"/>
    <!-- <div v-for="item in list_app_render" :key="item.id">
      {{ item.title }}
    </div> -->
  </transition-group>
</template>

<style scoped>

</style>
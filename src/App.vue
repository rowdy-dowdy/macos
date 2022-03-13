<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from "vuex";

const store = useStore()
const route = useRoute()
const router = useRouter()

const user = computed(() => store.state.user.user)

const checkLoggin = (user) => {
  if ( !user ) {
      router.push({name: 'auth'})
    }
}

checkLoggin(user.value)
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}

svg {
  @apply w-full h-full !fill-current;
}

a {
  @apply text-blue-600 hover:text-blue-500;
}

input,
select,
textarea,
a,
button {
  @apply focus:outline-none ring-0 ring-blue-600 focus:ring-2;
}
</style>

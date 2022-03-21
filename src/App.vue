<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from "./store";
import { User as UserType} from './models/user'

const store = useStore()
const route = useRoute()
const router = useRouter()

const user = computed(() => store.state.user.user)

const checkLoggin = (user: UserType | null) => {
  if ( !user ) {
    router.push({name: 'auth'})
  }
}

checkLoggin(user.value)

watch(
  (route),
  (v) => {
    transitionName.value = (v.name == 'home') ? 'fade' : ''
  }
)

const transitionName = ref<string>('')

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: scale(0.95);
}
</style>

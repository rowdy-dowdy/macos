<script setup lang="ts">
import { Component, computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { useStore } from "../../store";
import { AppInfo, AppDetails } from '../../models/app'
// import LoadingComponent from "./loading_app.vue"
// import ErrorComponent from "./error_app.vue"

const store = useStore()

const props = defineProps({
  item: {
    required: true,
    // type: Object as PropType<AppInfo>,
    type: Object as () => AppInfo 
  }
})

// const emit = defineEmits(['load', 'delete'])

const appComponent: Component = defineAsyncComponent({
  loader: () => import(`../../views/components/app/${props.item.name}.vue`),
  // loadingComponent: LoadingComponent,
  // errorComponent: ErrorComponent,
  delay: 0,
  // timeout: 3000,
  suspensible: false,
  onError(error) {
    console.log('error');
    
    close()
  }
})


const state = ref<AppDetails>({
  full: false,
  x: 32,
  y: 32,
  w: 576,
  h: null,
  z_index: store.state.app.index_app
})


const app = ref<HTMLElement | null>(null)
const hold = ref(false)


// toggle full app
const toogleFullApp = () => {
  state.value.full = !state.value.full
}

const minizoom = () => {
  store.commit('app/toogleShow', props.item.id)
}

const close = () => {
  store.commit('app/toogleDisplay',[ props.item.id, false ])
}

// drag drop app
let currentX: number;
let currentY: number;
let initialX: number;
let initialY: number;

watch(
  (hold),
  (v) => {
    if ( !app.value ) return
  
    if ( v ) {
      window.addEventListener('mousemove', drag)
    }
    else { 
      window.removeEventListener('mousemove', drag)
    }
  }
)

const dragStart = (e: MouseEvent) => {
  increaseIndex()

  hold.value = true

  if (state.value.x)
    initialX = e.clientX - state.value.x;

  if (state.value.y)
    initialY = e.clientY - state.value.y;
}

const drag = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()

  if (state.value.full) return

  currentX = e.clientX - initialX;
  currentY = e.clientY - initialY;

  state.value.x = currentX
  state.value.y = currentY
}

const dragEnd = (e: MouseEvent) => {
  hold.value = false

  initialX = currentX;
  initialY = currentY;
}

const increaseIndex = async () => {
  if (state.value.z_index != store.state.app.index_app) {
    state.value.z_index = store.state.app.index_app

    await store.commit('app/countIndexApp')
  }
}

const setHeight = () => {
  if ( app.value ) {
    let temp = app.value
    temp.style.height = 'initial'
    state.value.h = temp.offsetHeight
  }
}

// onmount
onMounted( async () => {
  await store.commit('app/countIndexApp')
})

</script>

<template>
  <div ref="app"
    class="absolute shadow-md max-h-full"
    :class="[{ 'transition-all duration-500': !hold }, { 'app_hide' : !item.show }]"
    :style="[{ width: !state.full ? `${state.w}px` : '100%' }, 
      { height: !state.full ? `${state.h}px` : '100%' },
      { left: !state.full ? `${state.x}px` : '0' }, 
      { top: !state.full ? `${state.y}px` : '0' },
      { zIndex: state.z_index || 'initial' }]"
    >
    <div class="h-full flex flex-col overflow-hidden bg-white"
      :class="{ 'rounded-lg': !state.full }">
      <div class="flex-none flex justify-between px-4 py-1 select-none" 
        :class="{ 'cursor-move': hold }"
        v-on.prevent.stop="{ mousedown: dragStart, mouseup: dragEnd }">
        <h1 class="capitalize">{{ item.title }}</h1>

        <div class="flex items-center space-x-2" @mousedown.prevent.stop="">
          <button class="w-4 h-4 bg-yellow-600 hover:bg-yellow-500 rounded-full"
            @click.prevent.stop="minizoom"></button>
          <button class="w-4 h-4 bg-green-600 hover:bg-green-500 rounded-full"
            @click.prevent.stop="toogleFullApp"></button>
          <button class="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full"
            @click.prevent.stop="close"></button>
        </div>
      </div>

      <div 
        class="flex-grow"
        @click.prevent.stop="increaseIndex"
      >
        <app-component @vnode-mounted="setHeight" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app_hide {
  /* transform: top scale(0.5); */
  @apply translate-y-20 scale-90 opacity-0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
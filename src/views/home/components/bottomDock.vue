<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import bottomDockItem from './bottomDockItem.vue'
import { useStore } from "../../../store";

const store = useStore()

const list = computed(() => store.state.app.list_app)

const openApp = (e: Event , id: number | undefined) => {
  if (id === undefined) return
  
  let index = list.value.findIndex(v => v.id == id)
  let button: HTMLButtonElement | null = e.target as HTMLButtonElement

  if ( !list.value[index].display ) {
    store.commit('app/toogleDisplay',[ id, true ])

    if ( button ) {
      button.classList.remove('app_opening', 'app_showing')
      setTimeout(() => {
        if (button)
          button.classList.add('app_opening')
      })
    }
  
  } else {
    store.commit('app/toogleShow', id)

    if ( button ) {
      button.classList.remove('app_showing', 'app_opening')
      setTimeout(() => {
        if (button)
          button.classList.add('app_showing')
      })
    }
  }
}

// zoom
const mouseX = ref<number | null>(null)

const dockMove = (e: MouseEvent) => {
  mouseX.value = e.x
}

const dockLeave = () => {
  mouseX.value = null
}

onMounted(() => {
  // list_button.value = document.querySelectorAll('#listButton .app_button') || null
})

</script>

<template>
  <div class="w-full flex justify-center z-10">
    <div id="listButton" 
      class="h-20 mx-auto rounded-xl bg-white/20 p-4 flex items-end space-x-4 mb-2"
      style="box-shadow: 0px 6px 10px 2px #00000042;"
      @mousemove="dockMove"
      @mouseleave="dockLeave">
      <!-- <bottom-dock-item v-for="item in list" :key="item.id" 
        :item="item"
        :mouseX="mouseX"
        @click="openApp($event, item.id)"/> -->
        
      <template v-for="(item,index) in list" :key="index">
        <template v-if="item.type != 'divine'">
          <bottom-dock-item 
            :item="item"
            :mouseX="mouseX"
            @click="openApp($event, item.id)"/>
        </template>

        <template v-else>
          <div class="w-0.5 h-full bg-black/50"></div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
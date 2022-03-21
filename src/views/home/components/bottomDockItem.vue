<script setup lang="ts">
import { interpolate } from 'popmotion';
import gsap from 'gsap'
import { onUnmounted, ref, watch, PropType } from "vue"
import { useStore } from "../../../store"
import { AppInfo } from '../../../models/app'

const props = defineProps({
  item: {
    required: true,
    type: Object as () => AppInfo
  },
  mouseX: {
    required: true,
    type: Number as PropType<number | null> // props not should be used type null

    // type: null as unknown as PropType<number | null>,
    // validator: (v: any) => typeof v === 'number' || v === null,
  }
})

const imageButton = new URL('/src/assets/icons/' + props.item.image, import.meta.url).href

const store = useStore()

let baseWidth = 48;
let distanceLimit = baseWidth * 6;
let beyondTheDistanceLimit = distanceLimit + 1;
let distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
]

let widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.414,
  baseWidth * 2,
  baseWidth * 1.414,
  baseWidth * 1.1,
  baseWidth,
]

const ref_button = ref<HTMLElement | null>(null)
const root = ref({
  width: baseWidth
})

const distance = ref(beyondTheDistanceLimit)

var raf: number | null = null

function animate() {
  if (ref_button.value && props.mouseX) {
    let rect = ref_button.value.getBoundingClientRect();

    let buttonCenterX = rect.left + rect.width / 2;
    let distanceDelta = props.mouseX - buttonCenterX;
    distance.value = distanceDelta;

    return;
  }
  distance.value = beyondTheDistanceLimit;
}

watch(
  () => props.mouseX,
  (v) => {
    raf = requestAnimationFrame(animate);
  }
)

let getWidthFromDistance = interpolate(distanceInput, widthOutput);

watch(
  (distance),
  v => {
    // console.log(getWidthFromDistance(v));
    
   gsap.to(root.value, { duration: 0.3, width: getWidthFromDistance(v) });

  }
)

onUnmounted(() => {
  if (raf)
    cancelAnimationFrame(raf);
})

</script>

<template>
  <a href="#" ref="ref_button"
    class="app_button relative group"
    :style="{ 'width': root.width + 'px' }"
  >
    <div class="relative w-full pb-[100%]">
      <img :src="imageButton" alt="" class="absolute top-0 left-0 w-full h-full object-contain">
    </div>

    <span v-if="item.display" class="absolute left-1/2 -bottom-2.5 block -translate-x-1/2 w-1 h-1 rounded-full bg-green-300 shadow-green-500"
      style="box-shadow: 0 0 5px 5px var(--tw-shadow-color);"
    ></span>
    <span v-if="item.name != ''" class="tooltip">{{ item.title }}</span>
  </a>
</template>

<style scoped>
.app_button * {
  @apply pointer-events-none;
}

.tooltip {
  @apply absolute -top-10 left-1/2 -translate-x-1/2 w-max max-w-[100px] rounded bg-black/80 text-white text-sm px-4 py-1 invisible opacity-0  group-hover:visible group-hover:opacity-100 transition-all;
}

.app_opening {
  animation: app_opening .8s linear;
}

.app_showing {
  animation: app_showing 1s linear;
}

@keyframes app_opening {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-60%);
  }
  85% {
    transform: translateY(-40%);
  }
}

@keyframes app_showing {
  50% {
    background: rbga(0,0,0,.5);
    opacity: .5;
  }
}
</style>
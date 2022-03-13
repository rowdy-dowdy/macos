<script setup lang="ts">
  // await new Promise(resolve => setTimeout(resolve, 1000));

import { ref } from "vue";

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

const time = ref(new Date)
</script>

<template>
  <div class="h-full flex flex-col bg-slate-200 p-4">
    <div class="border-b border-slate-400">
      <div class="flex justify-center items-center space-x-6 text-blue-600">
        <span class="block w-20 h-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
            />
          </svg>
        </span>
        <h1 class="text-6xl font-semibold uppercase">Việt hùng</h1>
      </div>
    </div>
    <div class="pt-4 mb-24">
      <div class="flex flex-col spcae-y-2 px-6 text-sm">
        <p>Việt Hùng app</p>
        <p>Version Dev (build v1)</p>
        <p>@ Việt Hùng Cốt Đơ. All Rights Reserved</p>
        <p class="!mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          repudiandae laborum molestias id veritatis excepturi mollitia eveniet?
          Quo consequuntur recusandae minus eius unde vitae veritatis, deleniti
          sed obcaecati, quam exercitationem!
        </p>
        <p class="!mt-8">
          Application is a non-commercial product, It was created to develop
          skills
          <a href="#" class="text-blue-600">Việt Hùng multi-stack developer</a>
        </p>
      </div>
    </div>
    <div class="!mt-auto flex justify-end">
      <button 
        class="px-8 rounded border border-slate-400 bg-white hover:bg-blue-600 hover:text-white "
        @click="openFullscreen">
        OK ({{ time }})
      </button>
    </div>
  </div>
</template>
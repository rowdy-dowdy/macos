<script setup lang="ts">
import { ref, onMounted } from 'vue'

// reactive state
const save_account = ref<boolean>(false)

// functions that mutate state and trigger updates
function toogleSave() {
  save_account.value = !save_account.value
}

// lifecycle hooks
onMounted(() => {
  // console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div class="relative flex w-full min-h-screen">
    <span class="bg-absolute opacity-40">
      <img src="@/assets/images/auth-bg.jpg" alt="auth background" class="img-full" loading="lazy">
    </span>

    <div class="relative w-full p-8">
      <div class="w-full max-w-7xl mx-auto h-full bg-slate-100 shadow-md rounded-md px-8 py-14">
        <div class="flex h-full items-center">
          <div class="w-1/2 mr-8">
            <div class="w-full max-w-md mx-auto">
              <img src="@/assets/images/auth-bg2.png" alt="" loading="lazy">
            </div>
          </div>
          <div class="w-1/2 flex flex-col space-y-4 self-stretch">
            <h2 class="text-3xl font-bold">Login app by your account</h2>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus dolore impedit? Accusamus!</p>

            <form class="!mt-12 !mb-4">
              <div class="mb-6">
                <p class="mb-2 select-none">Enter your email</p>
                <div class="rounded border-b-2 border-blue-500">
                  <input type="text" class="px-4 py-2 bg-white border-gray-300 rounded shadow w-full"
                    placeholder="Email">
                </div>
              </div>

              <div class="mb-6">
                <p class="mb-2 select-none">Enter your password</p>
                <div class="rounded border-b-2 border-blue-500">
                  <input type="text" class="px-4 py-2 bg-white border-gray-300 rounded shadow w-full"
                    placeholder="Password">
                </div>
              </div>

              <div class="mb-6 flex items-center">
                <input type="checkbox" name="" id="save" class="sr-only peer">
                <div class="w-8 h-8 border border-gray-300 rounded cursor-pointer grid place-items-center text-green-600 peer-focus:ring-2 ring-blue-600"
                  @click="toogleSave">
                  <span :class="{ hidden : !save_account}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                  </span>
                </div>
                <p class="pl-2 select-none">Save my account for future login</p>
              </div>

              <div class="mb-6 text-blue-600">
                <a href="#">Quên mật khẩu? . </a>
                <a href="#">Chưa có tài khoản? (đăng ký)</a>
              </div>
            </form>

            <div class="!mt-auto flex items-center space-x-4 justify-end">
              <router-link to="/" custom v-slot="{ navigate, href }">
                <a :href="href" @click="navigate"
                  class="text-blue-600">Truy cập bằng tài khoản khách</a>
              </router-link>
              <button class="px-12 py-2 rounded bg-blue-700 hover:bg-blue-600 text-white">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
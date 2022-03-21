import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { store, key } from './store'
import router from './router'

const app = createApp(App)

app.use(store, key)
app.use(router)

// click out side 
const clickOutside = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: Event) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: any) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
}

app.directive("click-outside", clickOutside)

app.mount('#app')

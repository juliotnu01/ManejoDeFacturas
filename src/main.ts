import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
createApp(App)
.use(VueTailwindDatepicker)
.use(pinia)
.mount('#app')

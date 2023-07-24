import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import './style.css'
import App from './views/App.vue'
import router from './plugins/routes/routes.ts'

const pinia = createPinia()
createApp(App)
.use(VueTailwindDatepicker)
.use(pinia)
.use(router)
.mount('#app')

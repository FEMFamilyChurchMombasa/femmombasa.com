import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq"

const app = createApp(App)

app.use(router)

app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1024,
        xl: 1440,
    }
})

app.mount('#app')

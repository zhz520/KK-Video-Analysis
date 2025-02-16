// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/font/iconfont.css'
import '@/assets/base.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

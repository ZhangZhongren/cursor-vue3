import { createApp } from 'vue'
import App from './App.vue'

// 样式导入顺序很重要
import 'tailwindcss/tailwind.css'
import './style.css'
import 'element-plus/dist/index.css'
// 引入 Element Plus
import ElementPlus from 'element-plus'
// 引入路由
import router from './router'
// 引入 Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 创建 Pinia 实例
const pinia = createPinia()

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
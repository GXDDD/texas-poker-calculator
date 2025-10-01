import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(ElementPlus);
app.use(pinia);
const approot = app.mount('#app');
console.log("应用实例：", app);
console.log("根组件实例：", approot);
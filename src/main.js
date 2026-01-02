import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/css/main.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './views/system/login/login.vue'
import Dashboard from './views/system/dashboard/dashboard.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000
})

app.use(router)
app.mount('#app')

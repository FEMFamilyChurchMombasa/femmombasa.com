import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home/Home.vue";
import Give from "../views/Give/Give.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/give", component: Give },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

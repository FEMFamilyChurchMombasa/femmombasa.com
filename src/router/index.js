import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home/Home.vue";
import Give from "../views/Give/Give.vue";
import LeadershipVue from '../views/Leadership/Leadership.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/give", component: Give },
  { path: "/our-leadership", component: LeadershipVue }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition) return savedPosition;
    if(to.hash) return { el: to.hash };
    return { x: 0, y: 0 }
  }
})

export default router

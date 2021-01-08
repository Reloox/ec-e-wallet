import Vue from 'vue'
import Home from "@/views/Home";
import AddCard from "@/views/AddCard";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddCard',
    name: 'AddCard',
    component: AddCard
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AddCard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

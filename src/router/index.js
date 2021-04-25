import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Basic from "../components/Basic";
import Check from "../components/Check"
// import Layout from "../components/Layout";

const routes = [
  {
    path: '/upload',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/layout',
  //   name: 'Layout',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'basic',
  //       component: Basic
  //     }
  //   ]
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

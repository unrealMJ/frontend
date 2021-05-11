import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../components/Layout";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'upload',
        component: () => import('../components/Basic'),
        name: 'Upload'
      },
      {
        path: 'recordList',
        component: () => import('../components/RecordList'),
        name: 'RecordList'
      },
      {
        path: 'view',
        component: () => import('../components/Check'),
        name: 'View'
      },
      {
        path: 'check/:date/:patient_id',
        component: () => import('../components/Check'),
        name: 'Check',
        props: true
      },
      {
        path: 'record',
        component: () => import('../components/Record'),
        name: "Record"
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

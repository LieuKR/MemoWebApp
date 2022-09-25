import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/auth/AuthView.vue'
import MemoView from '../views/memo/MemoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/memo',
    component: MemoView,
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "memo" */ '../views/memo/route-list.vue')
      },
      {
        path: 'write',
        component: () => import(/* webpackChunkName: "memo" */ '../views/memo/route-write.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "auth" */ '../views/auth/route-login.vue')
      },
      {
        path: 'signin',
        component: () => import(/* webpackChunkName: "auth" */ '../views/auth/route-signin.vue')
      }
    ]
  },
  {
    path: '/appinfo',
    component: () => import(/* webpackChunkName: "appinfo" */ '../views/appinfo/AboutView.vue'),
    children: [
      {
        path: 'wholeapp',
        component: () => import(/* webpackChunkName: "appinfo" */ '../views/appinfo/route-wholeapp.vue')
      },
      {
        path: 'client',
        component: () => import(/* webpackChunkName: "appinfo" */ '../views/appinfo/route-client.vue')
      },
      {
        path: 'server',
        component: () => import(/* webpackChunkName: "appinfo" */ '../views/appinfo/route-server.vue')
      },
      {
        path: 'db',
        component: () => import(/* webpackChunkName: "appinfo" */ '../views/appinfo/route-db.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/* eslint-disable no-undef */
// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppDefault.vue'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: '/ListRolesPage',
        name: 'ListRolesPage',
        component: () => import('@/views/rules/ListRolesPage.vue'),
      },
      {
        path: '/UserManagement',
        name: 'UserManagement',
        component: () => import('@/views/UserMangement/UserMangementPage.vue'),
      },
      {
        path: '/HistoryUserPage',
        name: 'HistoryUserPage',
        component: () => import('@/views/HistoryLog/HistoryUserPage.vue'),
      },
      {
        path: '/CreateRolePage/:role_id?',
        name: 'CreateRolePage',
        component: () => import('@/views/rules/CreateRolePage.vue'),
      },
      {
        path: '/HistoryTable',
        name: 'HistoryTable',
        component: () => import('@/components/tables/HistoryTable.vue'),
      },
      {
        path: '/MasterTable',
        name: 'MasterTable',
        component: () => import('@/components/tables/MasterTable.vue'),
      },
      {
        path: '/HistoryRolePage',
        name: 'HistoryRolePage',
        component: () => import('@/views/historyLog/HistoryRolePage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

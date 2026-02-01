/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/app',
            name: 'home',
            component: AppView,
            children: [
                {
                    path: '',
                    redirect: '/app/layout'
                },
                {
                    path: 'dataSource',
                    name: 'dataSource',
                    component: () => import('../views/DataSourceView.vue'),
                    // component: DataSourceView,
                    children: [
                        {
                            path: '',
                            redirect: '/app/dataSource/1'
                        },
                        {
                            path: ':id',
                            name: 'dataSourceDetail',
                            component: () => import('../views/DataSourceDetailView.vue')
                            // component: DataSourceDetailView
                        }
                    ]
                },
                {
                    path: 'layout',
                    name: 'layout',
                    component: () => import('../views/PageLayoutView.vue')
                    // component: PageLayoutView
                },
                {
                    path: 'actions',
                    name: 'actions',
                    component: () => import('../views/ActionsView.vue'),
                    // component: ActionsView,
                    children: [
                        {
                            path: ':id',
                            name: 'actionsDetail',
                            component: () => import('../views/ActionDetailView.vue')
                            // component: ActionDetailView
                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            redirect: '/app/layout'
        }
    ]
})

export default router

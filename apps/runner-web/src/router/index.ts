/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { createRouter, createWebHistory } from 'vue-router'

import RunnerView from '../views/RunnerView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/runner',
            name: 'runner',
            component: RunnerView
        },
        {
            path: '/',
            redirect: '/runner'
        }
    ]
})

export default router

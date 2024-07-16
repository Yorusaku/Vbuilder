/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEnvStore = defineStore('env', () => {
    const debug = ref(true)
    function toggle() {
        debug.value = !debug.value
    }

    return { debug, toggle }
})

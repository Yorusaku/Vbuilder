<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { LaptopPreviewer, MobilePreviewer } from '@miaoma/simulator'
import { isMobileTablet } from '@miaoma/utils'
import { onMounted, onUnmounted, provide, ref } from 'vue'

import { useAppEditorStore } from '../../stores/appEditor'

provide('editable', false)

const appEditorStore = useAppEditorStore()
const device = ref<'laptop' | 'mobile'>('laptop')

const resize = () => {
    const isMobile = isMobileTablet()

    if (isMobile) {
        device.value = 'mobile'
    } else {
        device.value = 'laptop'
    }
}

onMounted(() => {
    const isMobile = isMobileTablet()

    if (isMobile) {
        device.value = 'mobile'
    }

    window.addEventListener('resize', resize, false)
})

onUnmounted(() => {
    window.removeEventListener('resize', resize, false)
})
</script>

<template>
    <div class="runner-renderer">
        <LaptopPreviewer
            v-memo="[device === 'laptop']"
            v-if="device === 'laptop'"
            :app-editor-store="appEditorStore"
        />
        <MobilePreviewer
            v-memo="[device === 'mobile']"
            v-if="device === 'mobile'"
            :app-editor-store="appEditorStore"
        />
    </div>
</template>

<style scoped>
.runner-renderer {
    width: 100%;
    height: 100vh;
}
</style>

<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'

import ActionsLeftPanel from '@/components/ActionsLeftPanel/ActionsLeftPanel.vue'
</script>

<template>
    <div class="actions-wrapper">
        <ActionsLeftPanel />
        <RouterView />
    </div>
</template>

<style scoped>
.actions-wrapper {
    display: flex;
    height: 100%;
}
</style>

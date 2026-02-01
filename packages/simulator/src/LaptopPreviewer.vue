<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { BlocksRenderer } from '@miaoma/blocks'

interface AppEditorStore {
    blocks: any
    currentBlockId: string | null
    // eslint-disable-next-line no-unused-vars
    updateBlocks: (newBlocks: any) => void
    // eslint-disable-next-line no-unused-vars
    selectBlock: (id: string) => void
}

defineProps<{
    appEditorStore: AppEditorStore
}>()
</script>

<template>
    <div class="layout-runner-content-wrapper tiny-scrollbar" style="
--container-bg-color: #3d6583">
        <div class="layout-runner-content-header">
            <div class="layout-runner-content-navigator">
                <div class="layout-runner-content-navigator-info">
                    <div class="app-logo">
                        <img
                            src="https://functions.prod.internal.glideapps.com/getEmoji/%E2%98%84%EF%B8%8F"
                        />
                    </div>
                    <h1 class="app-name">MiaoMa vBuilder</h1>
                </div>
            </div>
        </div>
        <div class="layout-runner-content">
            <BlocksRenderer
                :blocks="appEditorStore.blocks"
                :updateBlocks="appEditorStore.updateBlocks"
                :selectBlock="appEditorStore.selectBlock"
                :currentBlockId="appEditorStore.currentBlockId"
                :editable="false"
            />
        </div>
    </div>
</template>

<style scoped>
.layout-runner-content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    height: 100%;
}

.layout-runner-content-header {
    position: sticky;
    top: 0;
    z-index: 2;
}

.layout-runner-content-navigator {
    display: flex;
    height: 56px;
    font-size: var(--font-size-normal);
    align-items: center;
    padding: 0 90px;
    background-color: var(--container-bg-color);
}

.layout-runner-content-navigator-info {
    display: flex;
    align-items: center;
}

.app-logo img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
}

.app-name {
    font-size: 16px;
    font-weight: var(--font-weight-bolder);
    color: var(--color-white);
    margin-left: 8px;
}

.layout-runner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 90px;
}
</style>

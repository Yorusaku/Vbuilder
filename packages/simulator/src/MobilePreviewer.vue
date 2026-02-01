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
    <div class="content" style="
--container-bg-color: #3d6583">
        <div class="navigator-wrapper">
            <div class="navigator">MiaoMa vBuilder</div>
        </div>

        <div class="render-content">
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
.content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
}

.wrapper::-webkit-scrollbar {
    display: none;
}

.navigator-wrapper {
    position: sticky;
    top: 0;
    z-index: 2;
}

.navigator {
    display: flex;
    height: 56px;
    align-items: center;
    padding: 0 12px;
    font-size: 18px;
    font-weight: var(--font-weight-bolder);
    color: var(--color-white);
    background-color: var(--container-bg-color);
    border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.title {
    height: 90px;
    background-color: var(--container-bg-color);
}

.render-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px 32px;
    flex: 1;
}
</style>

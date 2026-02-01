<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import type { BlockInfo } from '../block'
import BlockRenderer from './BlockRenderer.vue'
import { VueDraggableContainer } from './VueDraggable'

const props = defineProps<{
    blocks: BlockInfo[]
    // eslint-disable-next-line no-unused-vars
    selectBlock: (id: string) => void
    currentBlockId?: string | null
    editable?: boolean
}>()

const emit = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (e: 'update:blocks', value: BlockInfo[]): void
}>()

const handleDrop = (data: any) => {
    // 根据 drop 事件的数据更新 blocks 数组
    const { removedIndex, addedIndex } = data
    if (removedIndex !== null && addedIndex !== null) {
        const newBlocks = [...props.blocks]
        const [removed] = newBlocks.splice(removedIndex, 1)
        newBlocks.splice(addedIndex, 0, removed)
        emit('update:blocks', newBlocks)
    }
}
</script>

<template>
    <VueDraggableContainer
        class="renderer-dnd-container"
        :modelValue="blocks"
        @drop="handleDrop"
    >
        <div
            v-for="(block, i) in blocks"
            :key="block.id"
            class="block-item"
        >
            <BlockRenderer
                :block="block"
                :i="i"
                :blocks="blocks"
                :selectBlock="selectBlock"
                :currentBlockId="currentBlockId"
                :editable="editable"
            />
        </div>
    </VueDraggableContainer>
</template>

<style scoped>
.renderer-dnd-container {
    width: 100%;
}

.block-item {
    margin-bottom: 16px;
}
</style>

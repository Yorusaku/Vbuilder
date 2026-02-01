/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import type { BlockInfo } from '@miaoma/blocks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { blocks as blocksData } from '@/mocks/blocks'

export const useAppEditorStore = defineStore('appEditor', () => {
    const currentBlockId = ref<string | null>(null)
    const blocks = ref(blocksData)

    function selectBlock(id: string) {
        currentBlockId.value = id
    }

    function unSelectBlock() {
        currentBlockId.value = null
    }

    function updateBlocks(newBlocks: typeof blocksData) {
        blocks.value = newBlocks
    }

    function updateBlock(id: string, newBlock: BlockInfo) {
        // blocks.value = blocks.value.map((block) => {
        //     if (block.id === id) {
        //         return newBlock
        //     }
        //     return block
        // })
        for (const block of blocks.value) {
            if (block.id === id) {
                Object.assign(block, newBlock)
                break
            }
        }
    }

    return { currentBlockId, blocks, selectBlock, unSelectBlock, updateBlocks, updateBlock }
})

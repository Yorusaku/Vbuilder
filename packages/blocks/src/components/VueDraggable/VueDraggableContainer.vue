<!--
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 -->
<script setup lang="ts">
import type { SortableEvent } from 'sortablejs'
import { VueDraggable } from 'vue-draggable-plus'

const props = defineProps({
    modelValue: {
        type: Array as () => any[],
        default: () => []
    },
    orientation: {
        type: String,
        default: 'vertical'
    },
    removeOnDropOut: {
        type: Boolean,
        default: false
    },
    autoScrollEnabled: {
        type: Boolean,
        default: true
    },
    animationDuration: {
        type: Number,
        default: 250
    },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
        type: String,
        default: 'div'
    }
})


const emit = defineEmits(['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready'])


// 记录拖拽开始时的状态
let startIndex: number | null = null

const handleStart = (_event: SortableEvent) => {
    startIndex = _event.oldIndex as number
    emit('drag-start', _event)
}

const handleEnd = (_event: SortableEvent) => {
    emit('drag-end', _event)
}

const handleAdd = (event: SortableEvent) => {
    // 当元素被添加到容器时触发
    const payload = props.getChildPayload?.(event.newIndex as number, event.item)
    emit('drop', {
        removedIndex: startIndex,
        addedIndex: event.newIndex as number,
        payload
    })
}

const handleRemove = (event: SortableEvent) => {
    // 当元素从容器中移除时触发
    emit('drop', {
        removedIndex: event.oldIndex as number,
        addedIndex: null,
        payload: props.getChildPayload?.(event.oldIndex as number, event.item)
    })
}

const handleUpdate = (event: SortableEvent) => {
    // 当元素在容器内移动时触发
    const payload = props.getChildPayload?.(event.newIndex as number, event.item)
    emit('drop', {
        removedIndex: event.oldIndex as number,
        addedIndex: event.newIndex as number,
        payload
    })
}

const handleChoose = (_event: SortableEvent) => {
    emit('drag-enter', _event)
}

const handleUnchoose = (_event: SortableEvent) => {
    emit('drag-leave', _event)
}
</script>

<template>
    <VueDraggable
        :class="['vue-draggable-container']"
        :tag="props.tag || 'div'"
        :modelValue="props.modelValue || []"
        :group="props.groupName"
        :direction="props.orientation === 'horizontal' ? 'horizontal' : 'vertical'"
        :animation="props.animationDuration || 250"
        :handle="props.dragHandleSelector"
        :invertSwap="false"
        :removeCloneOnHide="true"
        :delay="props.dragBeginDelay || 0"
        :swapThreshold="1"
        :forceFallback="true"
        :fallbackClass="props.dragClass"
        :chosenClass="props.dragClass"
        :dragClass="props.dragClass"
        :dropClass="props.dropClass"
        @start="handleStart"
        @end="handleEnd"
        @add="handleAdd"
        @remove="handleRemove"
        @update="handleUpdate"
        @choose="handleChoose"
        @unchoose="handleUnchoose"
    >
        <slot></slot>
    </VueDraggable>
</template>

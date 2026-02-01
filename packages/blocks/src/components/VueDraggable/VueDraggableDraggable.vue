<!--
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 -->
<script setup lang="ts">
const props = defineProps<{
    tag?: string
    value?: any
}>()
</script>

<template>
    <component :is="props.tag || 'div'" class="vue-draggable-draggable">
        <slot></slot>
    </component>
</template>

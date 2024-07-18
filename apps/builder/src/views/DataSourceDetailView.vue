<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DataSourceContent from '@/components/DataSourceContent/DataSourceContent.vue'

const route = useRoute()

const dsId = computed(() => route.params.id as string)
</script>

<template>
    <DataSourceContent :id="dsId" />
</template>

<style scoped></style>

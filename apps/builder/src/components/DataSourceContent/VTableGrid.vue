<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import * as VTable from '@visactor/vtable'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Column {
    title: string
    width: number
    field?: string
    icon?: string
}

interface Record {
    id: string
    name: string
    age: string
    isOpen: boolean
    hobby: string[]
    avatar: string[]
    notes: string
}

const props = defineProps<{
    id: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)
let vtableInstance: any = null

const tempDataPool: Record[] = [
    {
        id: '001',
        name: '合一',
        age: '15',
        isOpen: true,
        hobby: ['football', 'swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: '**This is a markdown cell**'
    },
    {
        id: '002',
        name: '合二',
        age: '18',
        isOpen: true,
        hobby: ['basketball', 'swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    },
    {
        id: '003',
        name: '合三',
        age: '23',
        isOpen: false,
        hobby: ['basketball'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    },
    {
        id: '004',
        name: '合四',
        age: '25',
        isOpen: true,
        hobby: ['swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    }
]

const columns: Column[] = [
    { title: 'ID', width: 100, field: 'id' },
    { title: '姓名', width: 100, field: 'name' },
    { title: '年龄', width: 100, field: 'age' },
    { title: '状态', width: 50, field: 'isOpen' },
    { title: '爱好', width: 200, field: 'hobby' },
    { title: '头像', width: 200, field: 'avatar' },
    { title: '笔记', width: 200, field: 'notes' }
]

const generateData = (dsId: string): Record[] => {
    const len = dsId === '1' ? 1000000 : dsId === '2' ? 100000 : 10
    const tempDataList = new Array(len).fill(0)
    return tempDataList.map((item, index) => {
        const randomIndex = Math.floor(Math.random() * 4)
        const randomItem = tempDataPool[randomIndex]
        return {
            ...randomItem,
            id: `00${index}`,
            name: `合${Math.random().toString(36).substr(2, 2)}`,
            avatar: [`https://i.pravatar.cc/300?img=${index}`]
        }
    })
}

const initVTable = () => {
    if (!containerRef.value) return

    const data = generateData(props.id)

    vtableInstance = new VTable.ListTable({
        container: containerRef.value,
        columns: columns.map(col => ({
            field: col.field || '',
            title: col.title,
            width: col.width
        })),
        records: data,
        widthMode: 'standard'
    })
}

const updateVTable = () => {
    if (!vtableInstance) return

    const newData = generateData(props.id)
    vtableInstance.setRecords(newData)
}

onMounted(() => {
    initVTable()
})

watch(() => props.id, () => {
    updateVTable()
})

onBeforeUnmount(() => {
    if (vtableInstance) {
        vtableInstance.release()
        vtableInstance = null
    }
})
</script>

<template>
    <div class="vtable-container" ref="containerRef"></div>
</template>

<style scoped>
.vtable-container {
    width: 100%;
    height: 100%;
}
</style>

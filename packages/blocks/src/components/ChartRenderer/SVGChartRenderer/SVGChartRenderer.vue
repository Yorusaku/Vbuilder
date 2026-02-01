<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<template>
    <div class="svg-chart-container">
        <svg width="100%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <!-- 坐标轴 -->
            <line x1="50" y1="350" x2="750" y2="350" stroke="#000" stroke-width="2" />
            <line x1="50" y1="350" x2="50" y2="50" stroke="#000" stroke-width="2" />
            
            <!-- 数据点和线 -->
            <g v-for="(series, index) in chartData" :key="index" :style="{ stroke: series.color, fill: series.color }">
                <path
                    :d="generatePath(series.data)"
                    stroke-width="2"
                    fill="none"
                />
                <circle
                    v-for="(point, pointIndex) in series.data"
                    :key="pointIndex"
                    :cx="50 + pointIndex * 100"
                    :cy="350 - point.value * 3"
                    r="4"
                />
            </g>
            
            <!-- 刻度和标签 -->
            <g v-for="(item, index) in labels" :key="index">
                <line x1="50 + index * 100" y1="350" x2="50 + index * 100" y2="360" stroke="#000" />
                <text x="50 + index * 100" y="380" text-anchor="middle" font-size="12">{{ item }}</text>
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">


const chartData = [
    {
        name: 'Series 1',
        color: '#4CAF50',
        data: [
            { value: 65 },
            { value: 59 },
            { value: 80 },
            { value: 81 },
            { value: 56 },
            { value: 55 },
            { value: 40 }
        ]
    },
    {
        name: 'Series 2',
        color: '#2196F3',
        data: [
            { value: 28 },
            { value: 48 },
            { value: 40 },
            { value: 19 },
            { value: 86 },
            { value: 27 },
            { value: 90 }
        ]
    }
]

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const generatePath = (data: { value: number }[]) => {
    let path = ''
    data.forEach((point, index) => {
        const x = 50 + index * 100
        const y = 350 - point.value * 3
        if (index === 0) {
            path += `M ${x} ${y}`
        } else {
            path += ` L ${x} ${y}`
        }
    })
    return path
}
</script>

<style scoped>
.svg-chart-container {
    width: 100%;
    height: 400px;
}
</style>
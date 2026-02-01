// packages/blocks/src/index.ts

// 导出类型
export * from './block';

// 导出具体组件
export { default as ChartBlock } from './basic/ChartBlock.vue';
export { default as HeroTitleBlock } from './basic/HeroTitleBlock.vue';
export { default as ImageBlock } from './basic/ImageBlock.vue';
export { default as QuoteBlock } from './basic/QuoteBlock.vue';
export { default as ViewBlock } from './basic/ViewBlock.vue';
export { default as ButtonBlock } from './external/ButtonBlock.vue';
export { default as FormBlock } from './external/FormBlock.vue';
export { default as NotesBlock } from './external/NotesBlock.vue';

// 导出渲染器组件
export { default as BlockRenderer } from './components/BlockRenderer.vue';
export { default as BlocksRenderer } from './components/BlocksRenderer.vue';

// 导出 VueDraggable 组件
export * from './components/VueDraggable';


// 导出工具函数
export * from './utils/array';

// 导出常量
export * from './constants/blocksBaseMeta';

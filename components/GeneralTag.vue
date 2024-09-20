<template>
  <button
    :class="['main-button', 'default', { selected: props.isTagActive }]"
    @click="props.onClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { generalTagProps } from '../types';
const props = defineProps(generalTagProps);
</script>

<style scoped>
.default {
  background-color: var(--no-negro);
  color: white;
  border: 1px solid var(--eucalipto);
  max-width: 100%;
}
.default:hover {
  background-color: white;
  color: var(--eucalipto);
  border: 1px solid var(--menta-fresca);
}
.selected {
  background-color: white;
  color: var(--eucalipto);
  border: 1px solid var(--menta-fresca);
}
.selected:hover {
  background-color: var(--no-negro);
  color: white;
  border: 1px solid var(--eucalipto);
}
</style>

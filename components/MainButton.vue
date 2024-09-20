<template>
  <button
    class="main-button"
    :class="{ 'circular-button': props.isButtonACircle }"
    @click="props.onClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { mainButtonProps } from '~~/types';
const props = defineProps(mainButtonProps);
</script>

<style>
.main-button:hover {
  background-color: var(--menta-fresca);
}

.circular-button {
  border-radius: 100%;
  width: 2rem;
}
</style>

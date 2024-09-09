<template>
  <button
    :class="{ 'circular-button': props.isButtonACircle }"
    @click="() => props.onClick()"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { generalButtonProps } from '../types';
const props = defineProps(generalButtonProps);
</script>

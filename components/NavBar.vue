<template>
  <nav>
    <GeneralButton
      v-for="(button, index) in props.buttons"
      :key="index"
      :text="button.text"
      :is-button-a-circle="button.isButtonACircle"
    />
  </nav>
</template>

<script lang="ts" setup>
import { type GeneralButtonProps } from '../types';

const props = defineProps<{
  buttons: GeneralButtonProps[];
}>();
</script>

<style scoped>
nav {
  position: absolute;

  display: flex;
  width: calc(100vw - 4rem);
  gap: 1rem;
  justify-content: flex-end;
  margin: 2rem;
}
</style>

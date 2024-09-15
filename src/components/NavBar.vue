<template>
  <nav>
    <MainButton
      v-for="(button, index) in props.buttons"
      :key="index"
      :text="button.text"
      :is-button-a-circle="button.isButtonACircle"
    />
  </nav>
</template>

<script lang="ts" setup>
import { type MainButtonProps } from '../types';

const props = defineProps<{
  buttons: MainButtonProps[];
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

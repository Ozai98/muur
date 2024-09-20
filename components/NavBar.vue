<template>
  <nav>
    <h1>Daniela Andrade</h1>
    <MainButton
      v-for="(button, index) in props.buttons"
      :key="index"
      :text="button.text"
      :is-button-a-circle="button.isButtonACircle"
      :on-click="button.onClick"
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: calc(100vw - 4rem);
  gap: 1rem;
  justify-content: space-between;
  margin: 2rem;
  z-index: 2;
}
</style>

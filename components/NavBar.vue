<template>
  <nav>
    <h1 class="title">Daniela Andrade Sáez</h1>
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
.title {
  max-width: 8rem;
}
@media (orientation: portrait) {
  nav {
    margin: 2rem 0 0 1rem;
    width: calc(100vw - 2rem);
  }
}
</style>

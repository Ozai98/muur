<template>
  <div>
    <NavBar :buttons="buttons" />
    <ProjectFilters />
    <ProjectDetail v-if="isAProjectActive" />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import { type MainButtonProps } from '@/types';
import { useGlobalStore } from '@/stores/global';
const globalStore = useGlobalStore();
const isAProjectActive = globalStore.currentActiveProject !== null;
const buttons: MainButtonProps[] = [
  {
    text: 'i',
    isButtonACircle: true,
    onClick: () => console.log('clicked'),
  },
  {
    text: 'trabajemos',
    isButtonACircle: false,
    onClick: () => console.log('clicked'),
  },
];
</script>

<style>
/* Add your  styles here */
</style>

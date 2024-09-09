<template>
  <div>
    <NavBar :buttons="buttons" />
    <ProjectFilters />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '../components/NavBar.vue';
import { type GeneralButtonProps } from '../types';
const buttons: GeneralButtonProps[] = [
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

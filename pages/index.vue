<template>
  <div>
    <NavBar :buttons="buttons" />
    <ProjectFilters />
    <ProjectsMosaic />
    <ProjectDetail v-if="globalStore.currentActiveProject !== null" />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import { type MainButtonProps } from '~~/types';
import { useGlobalStore } from '~~/stores/global';
const globalStore = useGlobalStore();
const getFilters = async () => {
  const response = await fetch('api/get-filters');
  const filters = await response.json();
  globalStore.setFilters(filters);
};
const getProjects = async () => {
  const response = await fetch('api/get-projects');
  const projects = await response.json();
  globalStore.setProjects(projects);
};
const { currentActiveProject } = storeToRefs(useGlobalStore());

onMounted(() => {
  getFilters();
  getProjects();
});

watch(currentActiveProject, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

const buttons: MainButtonProps[] = [
  {
    text: 'contacto',
    isButtonACircle: false,
    onClick: () => {
      console.log('hola');
      window.open('https://api.whatsapp.com/send?phone=56972087140', '_blank');
    },
  },
];
</script>

<style>
.no-scroll {
  overflow: hidden;
}
</style>

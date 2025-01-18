<template>
  <div class="mosaic-container">
    <ProjectTile
      v-for="project in globalStore.filteredProjects"
      :key="project.key"
      :project="project"
      @click="globalStore.setActiveProject(project)"
    />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~~/stores/global';
const globalStore = useGlobalStore();
</script>
<style scoped>
@media (min-width: 1681px) {
  .mosaic-container {
    column-count: 2; /* Dos columnas iguales */
    column-gap: 1rem; /* Equivalente a column-gap */
    max-width: 77rem;
    margin: 14rem 11rem 0 auto;
    /* Espaciado superior y desplazamiento hacia la derecha */
  }
}

@media (max-width: 1680px) {
  .mosaic-container {
    column-count: 2; /* Dos columnas iguales */
    column-gap: 0.5rem; /* Equivalente a column-gap */
    margin: 14rem 0 0;
  }
}
</style>

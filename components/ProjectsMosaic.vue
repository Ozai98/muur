<template>
  <div class="mosaic-container">
    <ProjectTile
      v-for="project in projectsToShow"
      :key="project.key"
      :project="project"
      @click="globalStore.setActiveProject(project)"
    />
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~~/stores/global';
const globalStore = useGlobalStore();
const projectsToShow = computed(() => {
  return globalStore.projects.filter((project) => {
    return globalStore.activeFilters.every((filter) =>
      project.filters.some((projectFilter) => projectFilter.key === filter.key)
    );
  });
});
</script>
<style scoped>
.mosaic-container {
  column-count: 2;
  column-gap: 1rem;
  width: calc(80% - 2rem);
  margin-top: 6rem;
  margin-left: 20%;
  padding: 0 1rem;
}
</style>

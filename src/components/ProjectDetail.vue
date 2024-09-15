<template>
  <div class="project-backdrop">
    <div class="close-project-wrapper">
      <button class="raw-button" @click="handleGoBack">
        <img src="assets/go_back.svg" />
      </button>
    </div>
    <div class="project-content">
      <h2>{{ globalStore.currentActiveProject?.name }}</h2>
      <ImageCarousel
        v-if="globalStore.currentActiveProject?.imageReel"
        :images="globalStore.currentActiveProject?.imageReel"
      />
      <ProjectDescription :items="projectDescriptionItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
let projectDescriptionItems = [''];
if (globalStore.currentActiveProject) {
  projectDescriptionItems = [
    globalStore.currentActiveProject.year.toString(),
    globalStore.currentActiveProject.name,
    ...globalStore.currentActiveProject.filters.map((filter) => filter.text),
  ];
}

const handleGoBack = () => {
  globalStore.setActiveProject(null);
};
</script>
<style scoped>
.project-backdrop {
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--no-negro-80-porciento);
}
.close-project-wrapper {
  margin: 1rem;
}
.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3.5rem;
}
.project-description {
  display: flex;
}
</style>

<template>
  <div class="project-backdrop">
    <div class="close-project-wrapper">
      <button class="raw-button" @click="handleGoBack">
        <img src="assets/go_back.svg" />
      </button>
    </div>
    <div class="project-content">
      <h2>{{ globalStore.currentActiveProject?.name }}</h2>
      <div class="image-reel">
        <ImageCarousel
          :images="globalStore.currentActiveProject?.imageReel || []"
        />
      </div>
      <ProjectDescription :items="projectDescriptionItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '~/components/ImageCarousel.vue';
import { useGlobalStore } from '~~/stores/global';

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
  z-index: 3;
  position: fixed;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3.5rem;
}
.image-reel {
  display: flex;
  overflow-x: auto; /* Solo permite el scroll horizontal en este div */
  scroll-snap-type: x mandatory; /* Opcional: mejora la experiencia de scroll */
}
.project-description {
  display: flex;
}
.project-image {
  height: 70vh;
  margin: 0 5rem;
}
</style>

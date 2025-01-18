<template>
  <div class="project-backdrop" role="button" v-on:click="handleGoBack">
    <!-- <div class="close-project-wrapper">
      <button class="raw-button" @click="handleGoBack">
        <img src="assets/go_back.svg" />
      </button>
    </div> -->
    <div class="project-content">
      <div class="description-wrapper">
        <h1>{{ globalStore.currentActiveProject?.name }}</h1>
        <div class="details-wrapper">
          <h2 class="client-line">
            {{ globalStore.currentActiveProject?.client }}
            -
            {{ globalStore.currentActiveProject?.year }}
          </h2>
          <p>{{ globalStore.currentActiveProject?.description }}</p>
          <div class="filters-wrapper">
            <p
              v-for="(filter, index) in globalStore.currentActiveProject
                ?.filters"
            >
              {{ filter.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="image-reel-wrapper">
        <div class="image-reel">
          <img
            v-for="(image, index) in globalStore.currentActiveProject
              ?.imageReel"
            :src="image"
            class="image-item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  backdrop-filter: blur(8px);
}
.details-wrapper {
  margin-top: 2.75rem;
}
.filters-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
}
.client-line {
  margin-bottom: 1.375rem;
}
@media (min-width: 1681px) {
  .close-project-wrapper {
    margin: 1rem;
  }
  .project-content {
    display: flex;
    box-sizing: border-box;
    flex-direction: row-reverse;
    width: 100vw;
  }
  .image-reel-wrapper {
    overflow: scroll;
    scrollbar-width: none;
  }
  .image-reel {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 8rem);
    padding: 4rem 0 4rem;
    gap: 16px;
  }
  .image-item {
    max-width: 66rem;
    width: auto;
    height: auto;
    border-radius: 8px;
  }
  .description-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    margin: 4rem 2rem 0 1rem;
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: right;
    width: 31rem;
    background-color: var(--no-negro);
    height: fit-content;
  }
}

@media ((max-width: 1680px)) {
  .project-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    overflow: scroll;
    scrollbar-width: none;
  }
  .description-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;

    padding: 2rem;
    border-radius: 0.5rem;
    text-align: right;
    width: calc(100% - 4rem);
    background-color: var(--no-negro);
    height: auto;
    margin-bottom: 5.5rem;
  }
  .image-reel-wrapper {
    margin: 0 0.5rem;
  }
  .image-reel {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 5.5rem;
    padding-bottom: 11rem;
  }
  .image-item {
    max-width: calc(100vw - 1rem);
    width: auto;
    height: auto;
    border-radius: 0.5rem;
  }
}
</style>

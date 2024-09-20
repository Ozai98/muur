<template>
  <div class="filters-list-container">
    <div
      :class="[
        'filters-accordion',
        { 'filters-accordion-active': globalStore.areIdleFiltersShown },
      ]"
    >
      <GeneralTag
        v-for="filter in globalStore.idleFilters"
        :key="filter.key"
        :text="filter.text"
        :on-click="() => globalStore.moveFilter(filter)"
      />
    </div>
    <div class="filters-row">
      <MainButton text="Filtros" :on-click="globalStore.toggleFilters" />
      <GeneralTag
        v-for="filter in globalStore.activeFilters"
        :key="filter.key"
        class="active-filter"
        :text="filter.text"
        :on-click="() => globalStore.moveFilter(filter)"
        :is-tag-active="filter.isFilterOn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~~/stores/global';

const globalStore = useGlobalStore();
const handleScroll = () => {
  if (globalStore.areIdleFiltersShown) globalStore.toggleFilters();
};

onMounted(() => {
  window.addEventListener('wheel', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.filters-list-container {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
}
.filters-row {
  display: flex;
  gap: 1rem;
}
.filters-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  opacity: 0;
  visibility: hidden;
  transition:
    max-height 1s ease,
    opacity 1s,
    visibility 1s;
  max-height: 0;
  overflow: hidden;
}
.filters-accordion-active {
  max-height: 400px;
  opacity: 1;
  visibility: visible;
}
</style>

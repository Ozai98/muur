import { defineStore } from 'pinia';
import type { Filter, GlobalState } from '~/types';

// Definir el store en Pinia
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    activeFilters: [],
    idleFilters: [],
    areIdleFiltersShown: false,
  }),

  actions: {
    setFilters(filters: Filter[]) {
      this.idleFilters = filters;
    },
    moveFilter(filter: Filter) {
      if (filter.isFilterOn) {
        this.activeFilters = this.activeFilters.filter(
          (f) => f.key !== filter.key
        );
        filter.isFilterOn = false;
        this.idleFilters.push(filter);
      } else {
        this.idleFilters = this.idleFilters.filter((f) => f.key !== filter.key);
        filter.isFilterOn = true;
        this.activeFilters.push(filter);
      }
    },

    toggleFilters() {
      this.areIdleFiltersShown = !this.areIdleFiltersShown;
    },
  },
});

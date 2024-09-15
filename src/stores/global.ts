import { defineStore } from 'pinia';
import type { Filter, GlobalState, Project } from '@/types';

import image1 from '@/assets/project_images/touristic_map_tirua/1.png';
import image2 from '@/assets/project_images/touristic_map_tirua/2.png';
import image3 from '@/assets/project_images/touristic_map_tirua/3.png';
import image4 from '@/assets/project_images/touristic_map_tirua/4.png';

const images = [image1, image2, image3, image4];
// Definir el store en Pinia
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    activeFilters: [],
    idleFilters: [],
    areIdleFiltersShown: false,
    currentActiveProject: {
      key: 'touristic_map_tirua',
      name: 'Mapa turístico Tirúa y Lago Lleu-lleu',
      filters: [
        { key: 'map', text: '#mapa' },
        { key: 'infographic', text: '#infografía' },
      ],
      year: 2023,
      imageReel: images,
    },
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
    setActiveProject(project: Project | null) {
      this.currentActiveProject = project;
    },
  },
});

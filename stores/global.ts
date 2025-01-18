import { defineStore } from 'pinia';
import type { Filter, GlobalState, Project } from '~~/types';
// Definir el store en Pinia
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    activeFilters: [],
    idleFilters: [],
    areIdleFiltersShown: false,
    currentActiveProject: null,
    projects: [],
    filteredProjects: [],
  }),

  actions: {
    setFilters(filters: Filter[]) {
      this.idleFilters = filters;
    },
    moveFilter(filter: Filter) {
      if (filter.isFilterOn) {
        // Desactivar el filtro
        this.activeFilters = this.activeFilters.filter(
          (f) => f.key !== filter.key
        );
        filter.isFilterOn = false;
      } else {
        // Activar el filtro
        this.activeFilters.push(filter);
        filter.isFilterOn = true;
      }

      // Actualizar los proyectos filtrados con base en los filtros activos
      if (this.activeFilters.length > 0) {
        this.filteredProjects = this.projects.filter((project) =>
          this.activeFilters.every((filter) =>
            project.filters.some(
              (projectFilter) => projectFilter.key === filter.key
            )
          )
        );

        // Crear un set con los filtros disponibles basados en los proyectos filtrados
        const availableFilterKeys = new Set(
          this.filteredProjects.flatMap((project) =>
            project.filters.map((f) => f.key)
          )
        );

        // Actualizar idleFilters con los filtros aplicables de los proyectos filtrados
        this.idleFilters = this.projects
          .flatMap((project) => project.filters)
          .filter(
            (value, index, self) =>
              availableFilterKeys.has(value.key) &&
              self.findIndex((f) => f.key === value.key) === index &&
              !this.activeFilters.some((active) => active.key === value.key)
          );
      } else {
        // Restaurar todos los proyectos y filtros si no hay filtros activos
        this.filteredProjects = [...this.projects];
        this.idleFilters = this.projects
          .flatMap((project) => project.filters)
          .filter(
            (value, index, self) =>
              self.findIndex((f) => f.key === value.key) === index &&
              !this.activeFilters.some((active) => active.key === value.key)
          );
      }
    },
    toggleFilters() {
      this.areIdleFiltersShown = !this.areIdleFiltersShown;
    },
    setActiveProject(project: Project | null) {
      this.currentActiveProject = project;
    },
    setProjects(projects: Project[]) {
      this.projects = projects;
    },
    setFilteredProjects(projects: Project[]) {
      this.filteredProjects = projects;
    },
  },
});

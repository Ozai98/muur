<template>
  <div class="tile-container">
    <div class="name-container">
      <h1>{{ props.project.name }}</h1>
    </div>
    <img
      class="tile-image"
      :src="props.project.imageReel[0]"
      alt="project image"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~~/types';

const props = defineProps<{
  project: Project;
}>();
</script>
<style scoped>
.tile-container {
  position: relative;
  break-inside: avoid; /* Prevent items from splitting across columns */
  margin-bottom: 1rem;
  width: 100%;
  height: fit-content;
}
.tile-image {
  display: block;
  width: 100%; /* Hace que todas las imágenes ocupen el ancho completo */
  height: auto; /* Mantiene la proporción original de cada imagen */
  object-fit: cover; /* Opcional: ajusta el encuadre de la imagen */
  border-radius: 1rem;
}
.name-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 1;
  transition:
    visibility 0.3s ease,
    opacity 0.3s ease;
  opacity: 0; /* Inicialmente invisible */
}
.tile-container:hover .name-container {
  visibility: visible;
  opacity: 1; /* Se hace visible al hacer hover */
  cursor: pointer;
  background-color: var(--no-negro-80-porciento);
}
</style>

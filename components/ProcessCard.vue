<script setup lang="ts"></script>
<template lang="html">
  <section class="info-page-process-container">
    <h2>Proceso</h2>
    <p class="info-page-text-container">
      Tírúa ya contaba con un mapa turístico, por lo que esta sería una
      actualización del mismo, pero este poseía demasiados elementos en donde no
      estaba claro si todos ellos eran de referencia geográfica o meramente
      decorativos. Decidimos mantener los elementos característicos de la zona y
      usar un estilo similar al collage para mantener el interés visual.
    </p>
    <img
      class="info-page-process-img"
      src="https://placehold.co/1280x720/black/white?text=Placeholder"
    />
    <p class="info-page-text-container">
      Además nos proporcionaron la ubicación exacta de los alojamientos a listar
      en el soporte, nosotros organizamos esta información para que al escanear
      los mapas mostrara los lugares correspondientes a cada uno.
    </p>
  </section>
</template>
<style lang="css" scoped>
.info-page-process-container {
  display: flex;
  margin: 2rem;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  padding: 9rem;
  gap: 3rem;
  background-color: white;
  border-radius: 1rem;
}
.info-page-process-img {
  width: 60vw;
  border-radius: 1rem;
}
</style>

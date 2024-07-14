<script setup lang="ts"></script>
<template lang="html">
  <div class="info-page-container">
    <PostCard />
    <Process />
    <h2>Resultado</h2>
    <p class="info-page-text-container">
      El nuevo mapa turístico posee la ubicación de lugares de interés turístico
      (como cabañas, comercio y camping, entre otros) y hace uso de la
      tecnología, permitiendo al usuario escanear el código y directamente desde
      google usar la función que le indica cómo llegar a la ubicación deseada.
    </p>
    <img
      class="info-page-project-img"
      src="https://placehold.co/1280x720/black/white?text=Placeholder"
    />
    <img
      class="info-page-project-img"
      src="https://placehold.co/1280x720/black/white?text=Placeholder"
    />
    <button class="circular-button go-back-button">Λ</button>
  </div>
</template>
<style lang="css">
.info-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.info-page-text-container {
  width: 100%;
  max-width: calc(60vw - 4rem);
  text-align: justify;
}
.info-page-project-img {
  width: 80vw;
  border-radius: 1rem;
}
.go-back-button {
  margin: 3rem 0 4rem 0;
}
</style>

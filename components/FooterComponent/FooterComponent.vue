<template>
  <div class="footer-container">
    <div class="signature-container">
      <p>Desarrollado por ozai98 & Diseñado por mi ✨</p>
    </div>
    <div class="links-container">
      <a class="footer-link" href="">inicio</a>
      <a class="footer-link" href="">+ proyectos</a>
      <a class="footer-link" href="">info</a>
      <a class="footer-link" href="">contacto</a>
      <a class="footer-link" href="">seguimiento</a>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.footer-container {
  display: flex;
  width: 100vw;
  background-color: black;
  color: white;
  height: 7rem;
  text-align: center;
  z-index: 10;
}
.links-container {
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  width: 60%;
}
.signature-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  padding-bottom: 1rem;
}
.footer-link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>

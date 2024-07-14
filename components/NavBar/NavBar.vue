<script setup lang="ts">
import NavBarButton from './components/NavBarButton.vue';
const print = () => {
  console.log('Print');
};
</script>
<template>
  <div class="nav-container">
    <NavBarButton button-text="Daniela Andrade" @action="print" />
    <div class="center-elements">
      <NavBarButton button-text="+ proyectos" @action="print" />
      <NavBarButton button-text="info" @action="print" />
    </div>
    <NavBarButton button-text="contacto" @action="print" />
  </div>
</template>
<style language="css" scoped>
.nav-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 10;
}
.center-elements {
  display: flex;
  gap: 32px;
}
.nav-center-buttons-container {
  display: flex;
  gap: 2rem;
}
</style>

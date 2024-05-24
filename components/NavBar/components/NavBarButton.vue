<template lang="html">
  <button class="nav-bar-button" @click="action()">
    {{ text }}
  </button>
</template>
<script setup>
const props = defineProps({
  text: String,
  action: Function,
});
</script>
<style lang="css" scoped>
.nav-bar-button {
  border: 1px solid black;
  border-radius: 18px;
  background-color: transparent;
  height: 2.25rem;
  padding: 0 1rem;
}
</style>

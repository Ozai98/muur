<script setup>
const props = defineProps({
  buttonText: String,
  action: Function,
});
</script>
<template lang="html">
  <button class="nav-bar-button" @click="props.action()">
    {{ buttonText }}
  </button>
</template>
<style lang="css" scoped>
.nav-bar-button {
  border-radius: 1.125rem;
  height: 2.25rem;
  padding: 0 1rem;
}
</style>

<template>
  <div class="description-container">
    <div v-for="item in props.items" :key="item">
      <p>{{ item }}</p>
      <p v-if="items.indexOf(item) !== items.length - 1">&nbsp;|&nbsp;</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: string[];
}>();
</script>

<style scoped>
.description-container {
  display: flex;
}
.description-container > div {
  display: flex;
}
</style>

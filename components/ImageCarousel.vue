<template>
  <div class="carousel">
    <button class="arrow left" @click="goToPreviousImage">&lt;</button>
    <div class="carousel-container" @wheel="onWheel">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'carousel-item',
          {
            active: currentIndex === index,
            'is-left': index === leftIndex,
            'is-right': index === rightIndex,
          },
        ]"
      >
        <img :src="image" />
      </div>
    </div>
    <button class="arrow right" @click="goToNextImage">&gt;</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps<{
  images: string[];
}>();

const currentIndex = ref(0);
const totalImages = props.images.length;

const leftIndex = computed(
  () => (currentIndex.value - 1 + totalImages) % totalImages
);
const rightIndex = computed(() => (currentIndex.value + 1) % totalImages);

const goToNextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % totalImages;
};

const goToPreviousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + totalImages) % totalImages;
};

const onWheel = (event: WheelEvent) => {
  if (event.deltaY > 0) {
    goToNextImage();
  } else {
    goToPreviousImage();
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-item {
  position: absolute;
  opacity: 0;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.carousel-item img {
  height: 70vh;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 1rem;
}

.carousel-item.active {
  opacity: 1;
}
.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.arrow.left {
  left: 15vw; /* 1rem de distancia de la imagen */
}

.arrow.right {
  right: 15vw; /* 1rem de distancia de la imagen */
}
</style>

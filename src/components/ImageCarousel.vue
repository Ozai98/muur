<template>
  <div class="carousel">
    <div class="carousel-container" @wheel="onWheel">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'carousel-item',
          {
            active: currentIndex === index,
            'is-left': index === currentIndex - 1,
            'is-right': index === currentIndex + 1,
          },
        ]"
      >
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  images: string[];
}>();

const currentIndex = ref(0);

const goToNextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const goToPreviousImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
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

.carousel-item.is-left,
.carousel-item.is-right {
  opacity: 0.5;
}

.carousel-item.is-left {
  left: -20%;
}

.carousel-item.is-right {
  right: -20%;
}
</style>

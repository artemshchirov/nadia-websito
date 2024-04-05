<script setup lang="ts">
import { ref } from "vue";
import { slides } from "@/constants/slider-images";
const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
}
</script>

<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <h2 class="slider-name">{{ slides[currentSlide].name }}</h2>

  <NuxtImg
    class="slider-image"
    :src="slides[currentSlide].image"
    :alt="slides[currentSlide].name"
  />

  <div class="slider-controls">
    <button class="slider-prev" @click="prevSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none">
        <path
          d="M0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM1 5H24.5V4H1V5Z"
          fill="black"
        />
      </svg>
    </button>
    <div class="slider-counter">
      {{ currentSlide + 1 }}<span style="color: #aeaeae">/{{ slides.length }}</span>
    </div>
    <button class="slider-next" @click="nextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none">
        <path
          d="M24.3536 4.14645C24.5488 4.34171 24.5488 4.65829 24.3536 4.85355L21.1716 8.03553C20.9763 8.2308 20.6597 8.2308 20.4645 8.03553C20.2692 7.84027 20.2692 7.52369 20.4645 7.32843L23.2929 4.5L20.4645 1.67157C20.2692 1.47631 20.2692 1.15973 20.4645 0.964466C20.6597 0.769204 20.9763 0.769204 21.1716 0.964466L24.3536 4.14645ZM24 5H0.5V4H24V5Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
  <div class="slider-info">
    <p class="slider-signature">{{ slides[currentSlide].signature }}</p>
    <p class="slider-details">{{ slides[currentSlide].details }}</p>
  </div>
  <!-- </transition> -->
</template>

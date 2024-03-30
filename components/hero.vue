<script setup lang="ts">
import { ref } from "vue";
import { media } from "@/constants/media";
import { heroImagesArray } from "@/constants/hero-images";

const heroImages = ref([...heroImagesArray]);

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0);
const updateWindowWidth = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWindowWidth));
onUnmounted(() => window.removeEventListener("resize", updateWindowWidth));

const displayedImages = computed(() => {
  if (!windowWidth.value) return [];

  if (windowWidth.value < media.desktop) return heroImages.value.slice(1, 3);
  else if (windowWidth.value < media.largeScreen) return heroImages.value.slice(0, 4);
  return heroImages.value;
});
</script>

<template>
  <section class="hero section">
    <ul class="gallery">
      <li :class="['gallery__item', image.style]" v-for="image in displayedImages" :key="image.id">
        <NuxtImg
          :class="['gallery__image', image.isCropped ? 'crop' : '']"
          :src="image.src"
          :alt="image.alt"
        />
      </li>
    </ul>
    <div class="hero__wrapper">
      <div class="hero__title">
        <h1 class="hero__title-text">Photographer:</h1>
      </div>
      <div class="hero__container">
        <p class="hero__contact">Haifa/Israel</p>
        <p class="hero__contact">+(972)54-902-91-91</p>
      </div>
    </div>
  </section>
</template>

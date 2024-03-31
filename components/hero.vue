<script setup lang="ts">
import { heroImagesArray } from "@/constants/hero-images";
</script>

<template>
  <section class="hero section">
    <ul class="gallery">
      <Header />
      <li class="gallery__item" v-for="image in heroImagesArray" :key="image.id">
        <NuxtImg
          :class="['gallery__image', image.isCropped ? 'crop' : '']"
          :src="image.src"
          :alt="image.alt"
        />
      </li>

      <h1 class="title">Photographer:</h1>

      <p class="location">Haifa/Israel</p>
      <p class="phone">+(972)54-902-91-91</p>

      <NuxtImg
        class="gallery__image portrait"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/about/about-1_DnGSsOSxx.webp?updatedAt=1711886498930"
        alt="Nadia"
      />
    </ul>
  </section>
</template>

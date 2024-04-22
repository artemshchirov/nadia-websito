<script setup lang="ts">
import { heroImagesArray } from "@/constants/hero-images";
</script>

<template>
  <div class="main__hero" v-for="image in heroImagesArray" :key="image.id">
    <NuxtImg :class="['image', image.isCropped ? 'crop' : '']" :src="image.src" :alt="image.alt" />
  </div>
</template>

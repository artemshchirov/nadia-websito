<script setup lang="ts">
import { heroImagesArray } from "@/constants/hero-images";
</script>

<template>
  <section class="page section">
    <div class="home">
      <!-- HEADER MENU -->
      <nav class="nav">
        <button class="nav__btn">Menu</button>
      </nav>
      <!-- HEADER MENU END -->

      <!-- HEADER TITLE -->
      <p class="title">
        Your story, <br />
        immortalized in art
      </p>
      <!-- HEADER TITLE END -->

      <!-- HERO GALLERY -->
      <div class="home__hero" v-for="image in heroImagesArray" :key="image.id">
        <NuxtImg
          :class="['image', image.isCropped ? 'crop' : '']"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
      <!-- HERO GALLERY END -->

      <!-- CONTACT -->
      <h1 class="role">Photographer:</h1>
      <p class="location">Haifa/Israel</p>
      <p class="phone">+(972)54-902-91-91</p>
      <!-- CONTACT END -->

      <!-- DIVIDER -->
      <NuxtImg
        class="image portrait"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/about/about-1_DnGSsOSxx.webp?updatedAt=1711886498930"
        alt="Nadia"
      />
      <!-- DIVIDER END -->
    </div>
  </section>
</template>

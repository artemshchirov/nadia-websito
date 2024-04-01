<script setup lang="ts">
import { heroImagesArray } from "@/constants/hero-images";
</script>

<template>
  <section class="page section">
    <div class="main">
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
      <div class="main__hero" v-for="image in heroImagesArray" :key="image.id">
        <NuxtImg
          :class="['image', image.isCropped ? 'crop' : '']"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
      <!-- HERO GALLERY END -->

      <!-- CONTACT -->
      <p class="role">Photographer:</p>
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

      <!-- ABOUT -->
      <h1 class="name">Nadya Besson</h1>

      <NuxtImg
        class="profile-image image"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/about/about-2_a6fMxHecQ.webp?updatedAt=1711886499127"
        alt="Nadya Besson posing with a yellow background"
      />

      <dl class="details">
        <div class="details__item">
          <dt class="details__term">Original creditor:</dt>
          <dd class="details__description">
            Tally Technologies Inc. Originated By Cross River Bank
          </dd>
        </div>
        <div class="details__item">
          <dt class="details__term">Open date:</dt>
          <dd class="details__description">sep. 29/2021</dd>
        </div>
      </dl>

      <div class="bio">
        Hello, I&rsquo;m Nadya Besson &mdash; your key to a world where every shot turns into a
        story. Since 2018, I&rsquo;ve been capturing moments, turning them into unforgettable
        memories. My photography is the art of seeing beauty in the ordinary and magic in the
        momentary. From portraits to family stories, each frame tells its unique tale. Let&rsquo;s
        create something special together.
      </div>
      <!-- ABOUT END -->

      <!-- <NuxtImg
        class="image portrait"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/about/about-1_DnGSsOSxx.webp?updatedAt=1711886498930"
        alt="Nadia"
      /> -->
      <div class="divider-1" />
      <div class="divider-2" />
      <div class="divider-3" />
      <!-- <div class="divider-4" />
      <div class="divider-5" />
      <div class="divider-6" />
      <div class="divider-7" />
      <div class="divider-8" />
      <div class="divider-9" /> -->
    </div>
  </section>
</template>

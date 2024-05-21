<script setup lang="ts">
import { useMenu } from "@/hooks/use-menu";
import CloseIcon from "@/icons/close-icon.vue";

const props = defineProps<{
  isMainPage?: boolean;
}>();

const { isMenuOpen, toggleMenu } = useMenu();
</script>

<template>
  <nav class="nav">
    <button class="button" @click="toggleMenu">Menu</button>

    <div class="nav__menu" :class="{ 'menu-open': isMenuOpen }">
      <div class="overlay" v-if="isMenuOpen" @click="toggleMenu" />
      <div class="nav__content" :class="{ 'menu-open': isMenuOpen }">
        <button class="nav__close" @click="toggleMenu">
          <CloseIcon />
        </button>

        <NuxtLink to="/" class="nav__title">
          Your story, <br />
          immortalized in art
        </NuxtLink>

        <ul class="nav__links">
          <li>
            <NuxtLink class="nav__link" href="/about" @click="toggleMenu">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav__link" href="/portfolio" @click="toggleMenu">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav__link" href="#services" @click="toggleMenu">Services</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav__link" href="#contacts" @click="toggleMenu">Contacts</NuxtLink>
          </li>
        </ul>

        <p class="nav__text">Content</p>

        <ul class="nav__socials">
          <li>
            <NuxtLink
              class="nav__social"
              href="https://www.instagram.com/nadyabeson"
              target="_blank"
              >Instagram</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="nav__social" href="https://t.me/NadyaBeson" target="_blank"
              >Telegram</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="nav__social"
              href="https://api.whatsapp.com/send?phone=972549029191"
              target="_blank"
              >WhatsApp</NuxtLink
            >
          </li>
        </ul>

        <div class="nav__contact">
          <p>+972549029191</p>
          <NuxtLink href="mailto:nadyabeson@gmail.com" class="nav__mail"
            >nadyabeson@gmail.com</NuxtLink
          >
        </div>

        <p class="nav__copyright">Ⓒ All Rights Reserved</p>
        <p class="nav__year">.2024</p>

        <p class="nav__authors">
          <NuxtLink class="nav__mail" href="https://butcher.studio/" target="_blank">
            Created&nbsp;by&nbsp;Butcher/</NuxtLink
          >
          <br />
          <NuxtLink
            class="nav__mail"
            href="https://artemshchirov.github.io/portfolio/"
            target="_blank"
            >Developed&nbsp;by&nbsp;Ɐrtem</NuxtLink
          >
        </p>
      </div>
    </div>
  </nav>

  <NuxtLink to="/" class="title" :class="{ 'space-bottom': props.isMainPage }">
    Your story, <br />
    immortalized in art
  </NuxtLink>
</template>

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

        <p class="nav__title">
          Your story, <br />
          immortalized in art
        </p>

        <ul class="nav__links">
          <li class="nav__item"><NuxtLink class="nav__link" href="#about">About</NuxtLink></li>
          <li class="nav__item">
            <NuxtLink class="nav__link" href="#portfolio">Portfolio</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" href="#services">Services</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" href="#contacts">Contacts</NuxtLink>
          </li>
        </ul>

        <p class="nav__text">Content</p>

        <ul class="nav__socials">
          <li class="nav__item">
            <NuxtLink
              class="nav__social"
              href="https://www.instagram.com/nadyabeson"
              target="_blank"
              >Instagram</NuxtLink
            >
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__social" href="https://t.me/NadyaBeson" target="_blank"
              >Telegram</NuxtLink
            >
          </li>
          <li class="nav__item">
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
          <NuxtLink href="mailto:nadyabeson@gmail.com">nadyabeson@gmail.com</NuxtLink>
        </div>

        <p class="nav__copyright">Ⓒ All Rights Reserved</p>
        <p class="nav__year">.2024</p>

        <p class="nav__authors">
          Created&nbsp;by&nbsp;Butcher/<br
            class="nav__authors_multiline"
          />Developed&nbsp;by&nbsp;Ɐrtem
        </p>
      </div>
    </div>
  </nav>

  <p class="title" :class="{ 'space-bottom': props.isMainPage }">
    Your story, <br />
    immortalized in art
  </p>
</template>

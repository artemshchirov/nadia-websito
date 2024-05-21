<template>
  <footer class="footer" id="contacts">
    <p class="footer__year">.2024</p>
    <h2 class="footer__title">Contacts</h2>
    <ul class="footer__links">
      <li><NuxtLink class="footer__link" href="/about">About</NuxtLink></li>
      <li><NuxtLink class="footer__link" href="#services">Services</NuxtLink></li>
      <li><NuxtLink class="footer__link" href="/portfolio">Portfolio</NuxtLink></li>
      <li><NuxtLink class="footer__link" href="#contacts">Contacts</NuxtLink></li>
      <li><NuxtLink class="footer__link" to="#faq">FAQ</NuxtLink></li>
    </ul>

    <p class="footer__location">
      <NuxtLink href="https://www.google.com/maps/place/Haifa" target="_blank"
        >Israel, Haifa</NuxtLink
      >
    </p>
    <ul class="footer__socials">
      <li>
        <NuxtLink class="footer__social" href="https://www.instagram.com/nadyabeson" target="_blank"
          >Instagram</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="footer__social" href="https://t.me/NadyaBeson" target="_blank"
          >Telegram</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          class="footer__social"
          href="https://api.whatsapp.com/send?phone=972549029191"
          target="_blank"
          >WhatsApp</NuxtLink
        >
      </li>
    </ul>
    <div class="footer__contact">
      <p>+972549029191</p>
      <NuxtLink class="footer__mail" href="mailto:nadyabeson@gmail.com"
        >nadyabeson@gmail.com</NuxtLink
      >
    </div>
    <p class="footer__copyright">Ⓒ All Rights Reserved</p>
    <p class="footer__authors">
      <NuxtLink class="nav__mail" href="https://butcher.studio/" target="_blank">
        Created&nbsp;by&nbsp;Butcher</NuxtLink
      >/<br class="footer__authors_multiline" /><NuxtLink
        class="nav__mail"
        href="https://artemshchirov.github.io/portfolio/"
        target="_blank"
        >Developed&nbsp;by&nbsp;Ɐrtem</NuxtLink
      >
    </p>
    <div class="divider-md-20" />
    <div class="divider-md-21" />
    <div class="divider-md-22" />
  </footer>
</template>

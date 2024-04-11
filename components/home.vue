<script setup lang="ts">
import { heroImagesArray } from "@/constants/hero-images";
import { ref, watch } from "vue";

// TODO: Move NavMenu to a separate file
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "";
};

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    disableScroll();
  } else {
    enableScroll();
  }
});
</script>

<template>
  <section class="page">
    <div class="main section">
      <!-- HEADER MENU -->
      <nav class="nav">
        <button class="nav__btn" @click="toggleMenu">Menu</button>

        <div class="nav__menu" :class="{ 'menu-open': isMenuOpen }">
          <div class="overlay" v-if="isMenuOpen" @click="toggleMenu" />
          <div class="nav__content" :class="{ 'menu-open': isMenuOpen }">
            <button class="nav__close" @click="toggleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path d="M1 1L21 21" stroke="black" stroke-width="0.833333" />
                <path d="M1 21L21 1" stroke="black" stroke-width="0.833333" />
              </svg>
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
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(4)_eVXkwhd-g6.webp?updatedAt=1711983590231"
        alt="Nadia"
      />
      <!-- DIVIDER END -->

      <!-- ABOUT -->
      <h1 class="name">Nadya Besson</h1>

      <NuxtImg
        class="image image-9"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(5)_XvjoCwd6g.webp?updatedAt=1711983590048"
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

      <NuxtImg
        class="image image-10"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(19)_7kB86R3Ma.webp?updatedAt=1711983591947"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-11"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(24)_70NE-0pD2.webp?updatedAt=1711983593390"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-12"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(2)_JZIWeUACz.webp?updatedAt=1711983590273"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-13"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(6)_NVp5gcWb6O.webp?updatedAt=1711983590251"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-14"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(17)_PBaOO5QMQ.webp?updatedAt=1711983591974"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-15"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(18)_92sl9-0-6.webp?updatedAt=1711983591691"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-16"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(22)__VehIVXfb.webp?updatedAt=1711983592995"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-17"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(16)_Qmu3O2nLU.webp?updatedAt=1711983591878"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-18"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(21)_WNU0GT1q1.webp?updatedAt=1711983593198"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-19"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(30)_d8vd7GjAFe.webp?updatedAt=1711983593563"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-20"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(7)_blebrivcA.webp?updatedAt=1711983590286"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-21"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(29)_HZOCAvb8au.webp?updatedAt=1711983593511"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-22"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(3)_oXSNWuqOa.webp?updatedAt=1711983590173"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-23"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(8)_CveusFPo6.webp?updatedAt=1711983590147"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-24"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(25)__5X-iKLwJ.webp?updatedAt=1711983593300"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-25"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(23)_y4oHxhvYi.webp?updatedAt=1711983593376"
        alt="Nadia"
      />

      <NuxtImg
        class="image image-26"
        src="https://ik.imagekit.io/webbuilder/nadia-websito/main/photo%20(1)_0wi-rafPr.webp?updatedAt=1711983590143"
        alt="Nadia"
      />

      <div class="link link-1">
        <NuxtLink style="display: flex; align-items: center; gap: 4px" to="/portfolio"
          >See all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M2 8.5H14M14 8.5L8 2.5M14 8.5L8 14.5"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
        <div style="height: 1px; width: 100%; background-color: #000; margin-top: 3px" />
      </div>

      <!-- TODO: Dynamic margins and spacing -->
      <ul class="pricing">
        <li class="pricing__item">
          <h3 class="pricing__title">Portrait photoshoot</h3>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_lg">10 edited photos</p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_lg">
              <p class="pricing__cost">600</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
        <li class="pricing__item">
          <h3 class="pricing__title">Couple's photoshoot</h3>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_sm">10-12 edited photos</p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_lg">
              <p class="pricing__cost">800</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
        <li class="pricing__item">
          <h3 class="pricing__title">Animal photography (studio)</h3>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_sm">10-12 edited photos</p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_lg">
              <p class="pricing__cost">800</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
        <li class="pricing__item">
          <h3 class="pricing__title">Family photoshoot</h3>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_sm">10-12 edited photos</p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_md">
              <p class="pricing__cost">1000</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
        <li class="pricing__item">
          <h3 class="pricing__title">Food/Menu photoshoot</h3>
          <p class="pricing__description multiline">depending on the number</p>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_md">
              <span class="oneline">depending on the number</span> of items
            </p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_sm">
              <p class="pricing__cost">600+</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
        <li class="pricing__item">
          <h3 class="pricing__title">Product photography</h3>
          <p class="pricing__description multiline">depending on the number</p>
          <div class="pricing__row">
            <p class="pricing__description pricing__description_mr_md">
              <span class="oneline">depending on the number</span> of items
            </p>
            <div class="pricing__underline" />
            <div class="pricing__price pricing__price_ml_sm">
              <p class="pricing__cost">600+</p>
              <p class="pricing__currency">shekels</p>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="area">Portrait / Love&Family / Food / Animals / Outdoor</h2>

      <Reviews />

      <h2 class="faq" id="faq">FAQ</h2>
      <section class="accordion">
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb1" />
          <label for="cb1" class="tab__label"><span>How to choose outfits?</span></label>
          <div class="tab__content">
            <p>
              Choosing an&nbsp;outfit is&nbsp;a&nbsp;journey into your unique world of&nbsp;style.
              Together, we&rsquo;ll explore your wardrobe, discover favorite outfits that make you
              happy and confident. Inspired by&nbsp;this, we&rsquo;ll define the perfect concept for
              your photoshoot. Whether you wish to&nbsp;capture the spring mood or&nbsp;urban
              elegance, I&rsquo;ll help select the outfit that speaks for you. And let&rsquo;s not
              forget about accessories&nbsp;&mdash; they&rsquo;ll add a&nbsp;special touch
              to&nbsp;your photos.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb2" />
          <label for="cb2" class="tab__label"
            ><span
              >How long does the photoshoot last and how many photos will I receive?</span
            ></label
          >
          <div class="tab__content">
            <p>
              Each photoshoot with you is&nbsp;a&nbsp;unique creative adventure. The duration and
              the number of&nbsp;photos depend on&nbsp;various factors, including the choice
              of&nbsp;location and the mood we want to&nbsp;convey. My&nbsp;goal is&nbsp;not just
              to&nbsp;take pictures, but to&nbsp;capture the true beauty of&nbsp;the moment.
              You&rsquo;ll receive a&nbsp;collection of&nbsp;the best photos that will become your
              cherished memories.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb3" />
          <label for="cb3" class="tab__label"><span>What locations are available?</span></label>
          <div class="tab__content">
            <p>
              From secluded beaches to&nbsp;picturesque streets, from cozy cafes to&nbsp;mysterious
              abandoned buildings&nbsp;&mdash; our choice of&nbsp;location is&nbsp;only limited
              by&nbsp;our imagination. We&rsquo;ll find the place that best highlights your
              individuality and the spirit of&nbsp;the photoshoot. If&nbsp;you dream
              of&nbsp;a&nbsp;shoot in&nbsp;a&nbsp;special place, I&rsquo;m always open to&nbsp;new
              ideas and ready to&nbsp;bring them to&nbsp;life.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb4" />
          <label for="cb4" class="tab__label"><span>How does the process work?</span></label>
          <div class="tab__content">
            <p>
              From our first meeting to&nbsp;the moment you hold the finished photos in&nbsp;your
              hands, every step of&nbsp;our journey together is&nbsp;filled with creativity and
              attention to&nbsp;detail. We&rsquo;ll start by&nbsp;discussing your ideas and
              preferences, then select the location and outfits, and prepare everything needed for
              the shoot. For complete comfort, we&rsquo;ll meet over a cup of&nbsp;coffee before
              starting, so&nbsp;you can relax and get in&nbsp;the right mindset. The shoot will take
              place in&nbsp;a&nbsp;light and friendly atmosphere, where every frame is&nbsp;filled
              with emotions and beauty. And, of&nbsp;course, I&rsquo;ll take care of&nbsp;selecting
              and editing the best moments for you.
            </p>
          </div>
        </div>
      </section>

      <div class="divider-1" />
      <div class="divider-2" />
      <div class="divider-3" />
      <div class="divider-4" />
      <div class="divider-5" />
      <div class="divider-6" />
      <div class="divider-7" />
      <div class="divider-8" />
      <div class="divider-9" />
      <div class="divider-10" />
      <div class="divider-11" />
      <div class="divider-12" />
      <div class="divider-13" />
      <div class="divider-14" />
      <div class="divider-15" />
      <div class="divider-16" />
      <div class="divider-17" />
      <div class="divider-18" />
      <div class="divider-19" />
    </div>

    <footer class="footer">
      <p class="footer__year">.2024</p>
      <h2 class="footer__title">Contacts</h2>
      <ul class="footer__links">
        <li><NuxtLink href="#about">About</NuxtLink></li>
        <li><NuxtLink href="#services">Services</NuxtLink></li>
        <li><NuxtLink href="#portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink href="#contacts">Contacts</NuxtLink></li>
        <li><NuxtLink to="#faq">FAQ</NuxtLink></li>
      </ul>

      <p class="footer__location">Israel, Haifa</p>
      <ul class="footer__socials">
        <li>
          <NuxtLink href="https://www.instagram.com/nadyabeson" target="_blank">Instagram</NuxtLink>
        </li>
        <li><NuxtLink href="https://t.me/NadyaBeson" target="_blank">Telegram</NuxtLink></li>
        <li>
          <NuxtLink href="https://api.whatsapp.com/send?phone=972549029191" target="_blank"
            >WhatsApp</NuxtLink
          >
        </li>
      </ul>
      <div class="footer__contact">
        <p>+972549029191</p>
        <NuxtLink href="mailto:nadyabeson@gmail.com">nadyabeson@gmail.com</NuxtLink>
      </div>
      <p class="footer__copyright">Ⓒ All Rights Reserved</p>
      <p class="footer__authors">
        Created&nbsp;by&nbsp;Butcher/<br
          class="footer__authors_multiline"
        />Developed&nbsp;by&nbsp;Ɐrtem
      </p>
      <div class="divider-20" />
      <div class="divider-21" />
      <div class="divider-22" />
    </footer>
  </section>
</template>

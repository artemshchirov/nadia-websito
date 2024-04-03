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
        class="image image-9"
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

      <div class="link link-1"><NuxtLink to="/portfolio">See all</NuxtLink> -></div>

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
      <h2 class="review">Review</h2>

      <h2 class="faq">FAQ</h2>
      <section class="accordion">
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb1" />
          <label for="cb1" class="tab__label"><h3>How to choose outfits?</h3></label>
          <div class="tab__content">
            <p>
              Choosing an outfit is a journey into your unique world of style. Together, we'll
              explore your wardrobe, discover favorite outfits that make you happy and confident.
              Inspired by this, we'll define the perfect concept for your photoshoot. Whether you
              wish to capture the spring mood or urban elegance, I'll help select the outfit that
              speaks for you. And let's not forget about accessories – they'll add a special touch
              to your photos.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb2" />
          <label for="cb2" class="tab__label"
            ><h3>How long does the photoshoot last and how many photos will I receive?</h3></label
          >
          <div class="tab__content">
            <p>
              Choosing an outfit is a journey into your unique world of style. Together, we'll
              explore your wardrobe, discover favorite outfits that make you happy and confident.
              Inspired by this, we'll define the perfect concept for your photoshoot. Whether you
              wish to capture the spring mood or urban elegance, I'll help select the outfit that
              speaks for you. And let's not forget about accessories – they'll add a special touch
              to your photos.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb3" />
          <label for="cb3" class="tab__label"><h3>What locations are available?</h3></label>
          <div class="tab__content">
            <p>
              Choosing an outfit is a journey into your unique world of style. Together, we'll
              explore your wardrobe, discover favorite outfits that make you happy and confident.
              Inspired by this, we'll define the perfect concept for your photoshoot. Whether you
              wish to capture the spring mood or urban elegance, I'll help select the outfit that
              speaks for you. And let's not forget about accessories – they'll add a special touch
              to your photos.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" name="accordion-1" id="cb4" />
          <label for="cb4" class="tab__label"><h3>How does the process work?</h3></label>
          <div class="tab__content">
            <p>
              Choosing an outfit is a journey into your unique world of style. Together, we'll
              explore your wardrobe, discover favorite outfits that make you happy and confident.
              Inspired by this, we'll define the perfect concept for your photoshoot. Whether you
              wish to capture the spring mood or urban elegance, I'll help select the outfit that
              speaks for you. And let's not forget about accessories – they'll add a special touch
              to your photos.
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
      <div class="divider-20" />
    </div>
  </section>
</template>

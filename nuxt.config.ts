// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/styles/index.scss"],
  modules: ["@nuxt/image"],
  app: {
    head: {
      title: "Nadya Besson Photography | Photographer in Haifa, Israel",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Professional photographer Nadya Besson creates unforgettable stories in every frame. Portraits, Love Stories, family, and food photos. Photography services in Israel",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://nadiabesson.com" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Professional photographer Nadya Besson creates unforgettable stories in every frame. Portraits, Love Stories, family, and food photos. Photography services in Israel",
        },
        { hid: "og:locale", property: "og:locale", content: "en_US" },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://ik.imagekit.io/webbuilder/nadia-websito/about/about-1_DnGSsOSxx.webp?updatedAt=1711886499124`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Photographer Haifa, Family photoshoot Haifa, Portrait photography Haifa, Couples photography Haifa, Professional photographer Haifa, Pet photography Haifa, Nature photography Haifa, Food photography Haifa, Storytelling photography Haifa, Love story photoshoot Haifa, Children’s photoshoot Haifa, Personal photoshoot Haifa, Event photographer Haifa, Portfolio shooting Haifa, Outdoor photoshoot Haifa, Street photography Haifa, Studio photoshoot Haifa, Product photography Haifa, Creative photoshoot Haifa, Brand photoshoot Haifa",
        },
        { hid: "author", name: "author", content: "Created by Butcher/Developed by Ɐrtem" },
        { hid: "robots", name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://nadiabesson.com" },
      ],
    },
  },
});

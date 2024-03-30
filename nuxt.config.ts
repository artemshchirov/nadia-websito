// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/styles/index.scss"],
  modules: ["@nuxt/image"],
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Your site description" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://yourdomain.com" },
        { hid: "og:title", property: "og:title", content: "Your Site Title" },
        { hid: "og:description", property: "og:description", content: "Your site description" },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.BASE_URL}/og.webp`,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});

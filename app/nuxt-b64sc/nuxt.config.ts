// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/styles/reset.css", "~/assets/styles/global.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Playfair+Display": true,
        },
      },
    ],
  ],
});

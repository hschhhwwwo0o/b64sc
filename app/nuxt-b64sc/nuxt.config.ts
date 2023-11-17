// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "module/base64-to-dataurl-generator":
      "../../modules/base64-to-dataurl-generator",
    "module/feedback-service": "../../modules/feedback-service",
    "module/html-image-controller": "../../modules/html-image-controller",
  },
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
    "@nuxtjs/eslint-module",
  ],
});

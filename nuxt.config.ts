// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@prisma/nuxt"],
  ssr: true,
  devServer: {
    host: "0.0.0.0", // المضيف
    port: 3000, // المنفذ
  },
});

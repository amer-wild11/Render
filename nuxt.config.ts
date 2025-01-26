// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@prisma/nuxt"],
  ssr: true,
  nitro: {
    preset: "vercel", // التأكد من إعداد Nitro بشكل صحيح لبيئة Vercel
  },
});

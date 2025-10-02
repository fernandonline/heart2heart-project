// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils'],
  runtimeConfig: {
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || 'none'
    },
    public: {
      cloudnaryName: process.env.CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    }
  },
})
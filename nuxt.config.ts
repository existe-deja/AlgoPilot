// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint'],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: 'Algo Pilot',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3498db' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${process.env.NUXT_APP_BASE_URL}/icon-180.png` },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: `${process.env.NUXT_APP_BASE_URL}/icon-512.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${process.env.NUXT_APP_BASE_URL}/icon-32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${process.env.NUXT_APP_BASE_URL}/icon-16.png` },
        { rel: 'manifest', href: `${process.env.NUXT_APP_BASE_URL}/manifest.json` },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-15',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})

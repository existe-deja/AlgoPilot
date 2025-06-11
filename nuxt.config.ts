// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@vite-pwa/nuxt'],

  devtools: {
    enabled: true,
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

   app: {
    head: {
      title: 'Algo Pilot',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3498db' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
})
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  modules: ['@nuxt/content'],

  app: {
    head: {
      title: 'Anya Gordeladze',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Anya Gordeladze — harpist, vocalist, musicologist, and founder of the Georgian polyphonic ensemble Giorgobistve' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://anya.gordeladze.ge' },
        { property: 'og:title', content: 'Anya Gordeladze' },
        { property: 'og:description', content: 'Harpist, vocalist, musicologist, and founder of the Georgian polyphonic ensemble Giorgobistve' },
        { property: 'og:image', content: 'https://anya.gordeladze.ge/images/og.png' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Anya Gordeladze' },
        { name: 'twitter:description', content: 'Harpist, vocalist, musicologist, and founder of the Georgian polyphonic ensemble Giorgobistve' },
        { name: 'twitter:image', content: 'https://anya.gordeladze.ge/images/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  content: {},
})

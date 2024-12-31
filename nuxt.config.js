export default defineNuxtConfig({
      modules: [
        'nuxt-file-storage',
        '@prisma/nuxt',
        'nuxt-mongoose',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
        'nuxt-ui',
        'vuex',
        '@nuxt/http',
        'nuxt-api-party',
        '@sidebase/nuxt-auth',
        '@hebilicious/authjs-nuxt',
        'nuxt-auth-utils',
        'nuxt-graphql-client',
        'nuxt-graphql-server',
        'nuxt-devtools',
        '@nuxt/test-utils',
        '@nuxt/eslint',
        '@nuxtjs/eslint-module'
      ],
      css: [
        '~/assets/css/tailwind.css'
      ],
      build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
    })

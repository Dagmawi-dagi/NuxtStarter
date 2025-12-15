// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt','@vueform/nuxt','@maz-ui/nuxt'],

  vite:{
    plugins:[
      tailwindcss()
    ]
  },
  mazUi: {
    theme: {
      preset: 'maz-ui', // Choose: 'mazUi', 'ocean', 'pristine', 'obsidian'
      strategy: 'hybrid', // 'runtime' | 'buildtime' | 'hybrid'
      darkModeStrategy: 'class', // 'class' | 'media' | 'auto'
    }
  }
})
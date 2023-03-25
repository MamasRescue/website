const messagesFr = {
  common: {
    yes: 'oui',
    no: 'non',
    close: 'fermer',
  },
  home: {
    welcome: 'Bonjour et bienvenue sur Mama\'s Rescue !',
  },
  links: {
    home: 'MR.',
    about: 'À propos',
    contact: 'Contact',
    login: 'Connexion',
    logout: 'Déconnexion',
    signup: 'Créer mon compte',
    services: 'Services',
    cgu: 'Conditions générales d\'utilisation',
    confidentiality: 'Politique de confidentialité',
    cookies: 'Gestion des cookies',
    legal: 'Mentions légales',
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icons',
  ],
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'fr',
      messages: {
        fr: messagesFr
      }
    }
  }
})

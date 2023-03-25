const messagesFr = {
  common: {
    yes: 'oui',
    no: 'non',
    close: 'fermer',
    returnHome: 'Retour à l\'accueil',
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
    credits: 'Crédits et attributions',
  },
  signup: {
    title: 'Créer mon compte',
    subtitle: 'Créer mon compte Mama\'s Rescue',
    email: 'Adresse email',
    password: 'Mot de passe',
    passwordConfirm: 'Confirmer le mot de passe',
    submit: 'Créer mon compte',
  },
  login: {
    title: 'Connexion',
    subtitle: 'Connexion à Mama\'s Rescue',
    submit: 'Se connecter',
  },
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
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

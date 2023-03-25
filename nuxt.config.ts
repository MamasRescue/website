const messagesFr = {
  common: {
    yes: 'oui',
    no: 'non',
    close: 'fermer',
    returnHome: 'Retour à l\'accueil',
    seeResults: 'Voir les résultats',
    validate: 'Valider',
    choose: 'Choisir',
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
  questionnaire: {
    title: 'Questionnaire',
    subtitle: 'Questionnaire Mama\'s Rescue',
    questionFeel: 'Comment vous sentez-vous aujourd\'hui ?',
    questionFeelAnswer1: 'Très bien',
    questionFeelAnswer2: 'Bien',
    questionFeelAnswer3: 'Moyen',
    questionFeelAnswer4: 'Pas bien',
    questionFeelAnswer5: 'Très mal',
    questionSleep: 'Avez-vous bien dormi ?',
    questionSleepAnswer1: 'Oui',
    questionSleepAnswer2: 'Non',
    questionTired: 'Êtes-vous fatigué(e) ?',
    questionTiredAnswer1: 'Pas du tout',
    questionTiredAnswer2: 'Un peu',
    questionTiredAnswer3: 'Beaucoup',
  }
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

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
    questionFeel: 'Tu as donné naissance a ?',
    questionFeelAnswer1: 'Un bébé',
    questionFeelAnswer2: 'Des jumeaux',
    questionFeelAnswer3: 'Des triplés',
    questionFeelAnswer4: 'Plus',
    questionSleep: 'Te sens tu inquiéte ou soucieuse sans réelle raison ?',
    questionSleepAnswer1: 'Oui, très souvent',
    questionSleepAnswer2: 'Oui, parfois',
    questionSleepAnswer3: 'Presque jamais',
    questionSleepAnswer4: 'Non pas du tout',
    questionTired: 'T\'arrives t-il d\'avoir peur de ne pas savoir t\'y prendre avec ton enfant ?',
    questionTiredAnswer1: 'Non, j\'ai eu une super préparation!',
    questionTiredAnswer2: 'Oui, j\'ai peur de ne pas savoir être une "bonne" mère...',
    questionBaby: 'T\'est-il arrivé de t\'imaginer entrain de faire du mal à ton bébé ?',
    questionBabyAnswer1: 'Oui, très souvent',
    questionBabyAnswer2: 'Oui, c\'est arrivé',
    questionBabyAnswer3: 'Presque jamais',
    questionBabyAnswer4: 'Non, JAMAIS',
  },
  dashboard: {
    program1: '',
    program2: '',
    program3: '',
    warningTitle: 'Attention !',
    warningContent: 'Bien que ces programmes puissent fournir des suggestions utiles à titre informatif, ils ne peuvent en aucun cas remplacer l\'expertise et les conseils d\'un professionnel de la santé. Chaque individu est unique et présente des particularités physiologiques qui ne peuvent être prises en compte que par un spécialiste qualifié.'
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import fr from './translations/fr.json';
import en from './translations/en.json';
import de from './translations/de.json';

const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  },
  de: {
    translation: de
  }
};

// Initialize i18n
const instance = i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default instance;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './src/locales/en/translation.json';
import translationSV from './src/locales/sv/translation.json';


const resources = {
  en: { translation: translationEN },
  sv: { translation: translationSV },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng: string) => {
  if (lng === 'ar') {
    document.dir = 'rtl';
  } else {
    document.dir = 'ltr';
  }
});

export default i18n;
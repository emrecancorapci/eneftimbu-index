import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['tr'],
  showDefaultLangCode: false,
  translations: {
    en: 'src/assets/locales/en.json',
  },
});

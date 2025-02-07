import i18next, {
  DefaultNamespace,
  TFunction,
  type i18n as i18nType,
} from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import arCommon from './locale/ar/common';
import arPages from './locale/ar/pages';
import enCommon from './locale/en/common';
import enPages from './locale/en/pages';
import faCommon from './locale/fa/common';
import faPages from './locale/fa/pages';
import { defaultLocale } from 'src/configs/languages';

interface CustomI18n extends i18nType {
  t: TFunction<DefaultNamespace>;
}

const i18n: CustomI18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: defaultLocale,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    resources: {
      'en-US': { common: enCommon, pages: enPages },
      'ar-OM': { common: arCommon, pages: arPages },
      'fa-IR': { common: faCommon, pages: faPages },
    },
    defaultNS: 'translation',
  });

export default i18n;

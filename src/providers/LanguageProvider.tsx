import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { LanguagesType } from 'src/configs/languages';
import i18nInstance from 'src/i18n/i18n';
import { useSelector } from 'src/store';
import { arLocale, faLocale } from 'src/utils/yup';
import * as yup from 'yup';
import { ar, en } from 'yup-locales';

const localeMapper: Record<LanguagesType, yup.LocaleObject> = {
  'en-US': en,
  'ar-OM': arLocale,
  'fa-IR': faLocale,
};

const LanguageProvider = ({ children }) => {
  const i18n = useSelector(state => state.config.i18n);

  useEffect(() => {
    i18nInstance.changeLanguage(i18n);
    yup.setLocale(localeMapper[i18n]);
  }, [i18n]);

  return (
    <>
      <Helmet>
        <title>Zhoost</title>
      </Helmet>
      {children}
    </>
  );
};

export default LanguageProvider;

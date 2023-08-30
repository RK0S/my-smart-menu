import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',

    debug: false,

    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    interpolation: {
        escapeValue: false // not needed for react!!
    },

    resources: {
        ru: {
            translationsNS: {
                Language: 'RU'
            }
        },
        en: {
            translationsNS: {
                Language: 'EN'
            }
        }
    }
});

export default i18n;

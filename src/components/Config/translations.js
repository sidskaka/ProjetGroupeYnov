import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './fr/fr'
import en from './en/en'

const resources = {
  fr,
  en
}

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources,

  interpolation: {
    escapeValue: false
  }
})

export default i18n

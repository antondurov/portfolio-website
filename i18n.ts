import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            "title": "My Portfolio TEST",
            "welcome": "Welcome to my portfolio! TEST",
            "about": "About me TEST",
            "contact": "Contact me TEST",
            "projects": "Projects TEST",
            "cv": "CV TEST"
        }
    },
    ru: {
        translation: {
            "title": "Мое портфолио",
            "welcome": "Добро пожаловат!",
            "about": "Обо мне",
            "contact": "Контакты",
            "projects": "Проекты",
            "cv": "Резюме"
        }
    },
    he: {
        translation: {
            "title": "הפורטפוליו שלי",
            "welcome": "ברוך הבא",
            "about": "עלי",
            "contact": "צור קשר",
            "projects": "פרויקטים",
            "cv": "קורות חיים"
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: { escapeValue: false } // react already safes from xss
    })
export default i18n

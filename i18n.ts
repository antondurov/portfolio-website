import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            "title": "My Portfolio",
            "welcome": "Welcome to my portfolio!",
            "about": "About me",
            "contact": "Contact me",
            "projects": "Projects",
            "cv": "CV",
            "not-found": "Page not found"
        }
    },
    ru: {
        translation: {
            "title": "Мое портфолио",
            "welcome": "Добро пожаловат!",
            "about": "Обо мне",
            "contact": "Контакты",
            "projects": "Проекты",
            "cv": "Резюме",
            "not-found": "Страница не найдена"
        }
    },
    he: {
        translation: {
            "title": "הפורטפוליו שלי",
            "welcome": "ברוך הבא",
            "about": "עלי",
            "contact": "צור קשר",
            "projects": "פרויקטים",
            "cv": "קורות חיים",
            "not-found": "דף לא נמצא"
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

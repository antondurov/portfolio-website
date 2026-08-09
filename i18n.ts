import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            "title": "My Portfolio",
            "welcome": "Hi, nice to meet you.",
            "home": "Home",
            "about": "Me",
            "projects": "Projects",
            "contact": "Contact",
            "cv": "CV",
            "more": "More",
            "not-found": "Page not found :(",
            "Music": "Music"
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
            "more": "Еще",
            "not-found": "Страница не найдена",
            "Music": "Музыка"
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
            "more": "עוד",
            "not-found": "דף לא נמצא",
            "Music": "מוסיקה"
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

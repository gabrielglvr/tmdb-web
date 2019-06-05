import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en-US': {
        translation: {
            "Upcoming Movies": "Upcoming Movies",
            "More Info": "More Info",
            "Back": "Back",
            "My favourite movie": "My favourite movie"
        }
    },
    'pt-BR': {
        translation: {
            "Upcoming Movies": "Próximas Estreias",
            "More Info": "Mais Informações",
            "Back": "Voltar",
            "My favourite movie": "Meu filme favorito"
        }
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
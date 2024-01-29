import { useTranslation } from 'react-i18next'


export default function LanguageSelector() {

    const { t, i18n } = useTranslation("global")

    return (
        <>
            <div className='language-selector'>
                {t("languageSelector.chooseLanguage")}
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            </div>
        </>
    )
}


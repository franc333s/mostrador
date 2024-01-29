import { Link } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Topbar from "../components/topbar/Topbar"

//Language selector
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/helpers/LanguageSelector"


function About() {

    const { t } = useTranslation("global")

    return (
        <>
        <Topbar />
        <LanguageSelector />
        <main className="about">
            
            <section className="about__sect">
                <div className="about__sect__flex">
                    <div>
                        <p className="about__title">Email</p>
                        <h1 className="about__text"><Link to="mailto:info@mostradorgallery.com" target="_blank">info@mostradorgallery.com</Link></h1>
                    </div>
                    <div>
                        <p className="about__title">{t("about.based")}</p>
                        <h2 className="about__text">Valencia, Spain</h2>
                    </div>
                </div>
                

                <div>
                    <p className="about__title">{t("about.about")}</p>
                    <p className="about__text--variation">{t("about.aboutDef")}</p>
                </div>
            </section>
                
            <div className="about__div">
                <p className="about__title--variation">[em] [ou] [es] [ti] [ar] [ei] [di] [ou] [ar]</p>
                <img className="about__img" src="/EU-plan/mostrador-logos.webp" alt="Mostrador proyecto subvencionado por la UE" />
            </div>

        </main>

        <Footer />
        </>
    )
}

export default About
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./InfoHome.scss";

function InfoHome () {

    //Fixing nav bar on top of screen when certain height is reached at Home page
    const location = useLocation();
    const [ scrollY, setScrollY ] = useState(0);
    const [ addStaticClass, setAddStaticClass ] = useState(false);
    const isHome = location.pathname === "/";

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (isHome) {
                if (window.scrollY > 820) {
                setAddStaticClass(true);
                } else {
                setAddStaticClass(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHome]);

    return (
        <>
        <nav className={`info ${addStaticClass ? "info--fixed" : ""}`}>
            <h1 className="info__title">Mostador / Gallery</h1>
            <ul className="info__inner">
                <li className="info__inner__title text-trans--uppercase">→ Works,&nbsp;</li>

                <li className="info__inner__title text-trans--uppercase"><Link to="/about">About</Link>,&nbsp;</li>
                
                <li className="info__inner__title text-trans--uppercase"><Link to="mailto:info@mostradorgallery.com">Contact</Link>,&nbsp;</li>
                
                <li className="info__inner__title text-trans--uppercase"><Link to="https://www.instagram.com/mostradorgallery" target="_blank">Instagram</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default InfoHome;
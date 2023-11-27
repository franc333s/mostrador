import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Topbar.scss";

function Topbar () {

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

    if (isHome) {
        return (
            <>
            <nav className={`topbar--home ${addStaticClass ? 'topbar--fixed' : ''}`}>
                <p className="topbar__title text-trans--uppercase"><Link to="/">Mostador / Gallery</Link></p>
                <ul className="topbar__inner">
                    <li className="topbar__inner__item text-trans--uppercase">→ <Link to="/">Works</Link>,&nbsp;</li>
    
                    <li className="topbar__inner__item text-trans--uppercase"><Link to="/about">About</Link>,&nbsp;</li>
                    
                    <li className="topbar__inner__item text-trans--uppercase"><Link to="mailto:info@mostradorgallery.com">Contact</Link></li>
    
                    <li className="topbar__inner__item text-trans--uppercase">, <Link to="https://www.instagram.com/mostradorgallery/" target="_blank">Instagram</Link></li>
                </ul>
            </nav>
            </>
        )

    } else {
        return (
            <>
            <nav className="topbar">
                <p className="topbar__title text-trans--uppercase"><Link to="/">Mostador / Gallery</Link></p>
                <ul className="topbar__inner">
                    <li className="topbar__inner__item text-trans--uppercase">→ <Link to="/">Works</Link>,&nbsp;</li>
    
                    <li className="topbar__inner__item text-trans--uppercase"><Link to="/about">About</Link>,&nbsp;</li>
                    
                    <li className="topbar__inner__item text-trans--uppercase"><Link to="mailto:info@mostradorgallery.com">Contact</Link></li>
    
                    <li className="topbar__inner__item text-trans--uppercase">, <Link to="https://www.instagram.com/mostradorgallery/" target="_blank">Instagram</Link></li>
                </ul>
            </nav>
    
            </>
        )
    }

   
}

export default Topbar;
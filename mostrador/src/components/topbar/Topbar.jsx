import { Link } from "react-router-dom";

import "./Topbar.scss";

function Topbar () {

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

export default Topbar;
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Topbar.scss";

function Topbar () {

    //Text visibility set in links
    const [innerTextVisibility, setInnerTextVisibility] = useState({});

    const toggleInnerTextVisibility = (innerTitle) => {
        setInnerTextVisibility((prevState) => ({
            ...prevState,
            [innerTitle]: !prevState[innerTitle],
        }));
    }

    return (
        <>
        <nav className="topbar">
            <p className="topbar__title text-trans--uppercase">Mostador / Gallery</p>
            <ul className="topbar__inner">
                <li className="topbar__inner__item">→ <Link to="/">Works</Link>,&nbsp;</li>
                <li className="topbar__inner__item"><Link to="/about">About</Link>,&nbsp;</li>
                
                <li className="topbar__inner__item"><Link onClick={() => toggleInnerTextVisibility("contact")}>Contact</Link></li>

                    {innerTextVisibility["contact"] && (
                    <p className="topbar__inner__item">&nbsp;&#47;&#47; info@mostradorgallery.com</p>
                    )}

                <li className="topbar__inner__item">, <Link onClick={() => toggleInnerTextVisibility("instagram")}>Instagram</Link></li>

                    {innerTextVisibility["instagram"] && (
                    <p className="topbar__inner__item">&nbsp;&#47;&#47; @<Link  >mostradorgallery</Link></p>
                    )}
            </ul>
        </nav>

        </>
    )
}

export default Topbar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./InfoHome.scss";

function InfoHome () {

    //Text visibility set in links
    const [innerTextVisibility, setInnerTextVisibility] = useState({});

    const toggleInnerTextVisibility = (innerTitle) => {
        setInnerTextVisibility((prevState) => ({
            ...prevState,
            [innerTitle]: !prevState[innerTitle],
        }));
    }

    //Fixing nav bar on top of screen when certain hight is reached
    const [ scrollY, setScrollY ] = useState(0);
    const [ addStaticClass, setAddStaticClass ] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (window.scrollY > 820) {
                setAddStaticClass(true);
            } else {
                setAddStaticClass(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>


        <section className={`info ${addStaticClass ? "info--fixed" : ""}`}>
            <h1 className="info__title">Mostador / Gallery</h1>
            <nav className="info__inner">
                <h2 className="info__inner__title">→ Works, </h2>

                <h2 className="info__inner__title"><Link onClick={() => toggleInnerTextVisibility("works")}>About</Link></h2>
                
                {innerTextVisibility["works"] && (
                    <p className="info__inner__text"> &#47;&#47; Founded in 2023, Mostrador is dedicated to showcasing works at the interection of art and design, where the utility of an object meets its aesthetic potential.&emsp;&emsp;Mostrador provides a platform for artists and designers to expertiment with the boundaries of function and form, showcasing both established and emerging talents, at Mostrador we believe that the process of creation is just as imoprtant as the finished product, and our curatorial program highlights the unique narratives behind each piece.&emsp;&emsp;We are committed to promoting access to the arts, advocating for diversity in design, and exploring the intersections of disciplines. Through our works and publications, we strive to inspire and challenge the perceptions of what is posible in design</p>
                )}
                
                <h2 className="info__inner__title">, <Link onClick={() => toggleInnerTextVisibility("contact")}>Contact</Link></h2>
                
                {innerTextVisibility["contact"] && (
                    <p className="info__inner__text"> &#47;&#47; info@mostradorgallery.com</p>
                )}
                
                <h2 className="info__inner__title">, <Link onClick={() => toggleInnerTextVisibility("instagram")}>Instagram</Link></h2>
                
                {innerTextVisibility["instagram"] && (
                    <p className="info__inner__text"> &#47;&#47; @<Link  >mostradorgallery</Link></p>
                )}

            </nav>
        </section>
        </>
    )
}

export default InfoHome;
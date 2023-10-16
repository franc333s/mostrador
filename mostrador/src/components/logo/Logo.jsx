import { useEffect, useState } from "react";
import Logo20 from "./logo-variations/Logo20";
import Logo40 from "./logo-variations/Logo40";
import Logo60 from "./logo-variations/Logo60";
import Logo80 from "./logo-variations/Logo80";
import Logo100 from "./logo-variations/Logo100";
import Logo120 from "./logo-variations/Logo120";
import Logo140 from "./logo-variations/Logo140";
import Logo160 from "./logo-variations/Logo160";
import Logo180 from "./logo-variations/Logo180";
import Logo200 from "./logo-variations/Logo200";
import Logo220 from "./logo-variations/Logo220";
import Logo240 from "./logo-variations/Logo240";
import Logo260 from "./logo-variations/Logo260";
import Logo280 from "./logo-variations/Logo280";
import Logo300 from "./logo-variations/Logo300";

import "./Logo.scss"


const Logo = () => {

    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let logoContent;

        if (scrollY < 50) {
            logoContent = <Logo20 />;
        } else if (scrollY < 100) {
            logoContent = <Logo40 />;
        } else if (scrollY < 150) {
            logoContent = <Logo60 />;
        } else if (scrollY < 200) {
            logoContent = <Logo80 />;
        } else if (scrollY < 250) {
            logoContent = <Logo100 />;
        } else if (scrollY < 300) {
            logoContent = <Logo120 />;
        } else if (scrollY < 350) {
            logoContent = <Logo140 />;
        } else if (scrollY < 400) {
            logoContent = <Logo160 />;
        } else if (scrollY < 450) {
            logoContent = <Logo180 />;
        } else if (scrollY < 500) {
            logoContent = <Logo200 />;
        } else if (scrollY < 550) {
            logoContent = <Logo220 />;
        } else if (scrollY < 600) {
            logoContent = <Logo240 />;
        } else if (scrollY < 650) {
            logoContent = <Logo260 />;
        } else if (scrollY < 700) {
            logoContent = <Logo280 />;
        } else {
            logoContent = <Logo300 />;
        }
    
    return (
            <>
                <div className="logo">

                    {logoContent}
                
                </div>
            </>
          )
}
export default Logo;
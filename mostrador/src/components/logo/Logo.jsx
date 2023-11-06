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
    const [ addStaticClass, setAddStaticClass ] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (window.scrollY > 600) {
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

    let logoContent;

        if (scrollY < 40) {
            logoContent = <Logo20 />;
        } else if (scrollY < 80) {
            logoContent = <Logo40 />;
        } else if (scrollY < 120) {
            logoContent = <Logo60 />;
        } else if (scrollY < 160) {
            logoContent = <Logo80 />;
        } else if (scrollY < 200) {
            logoContent = <Logo100 />;
        } else if (scrollY < 240) {
            logoContent = <Logo120 />;
        } else if (scrollY < 280) {
            logoContent = <Logo140 />;
        } else if (scrollY < 320) {
            logoContent = <Logo160 />;
        } else if (scrollY < 360) {
            logoContent = <Logo180 />;
        } else if (scrollY < 400) {
            logoContent = <Logo200 />;
        } else if (scrollY < 440) {
            logoContent = <Logo220 />;
        } else if (scrollY < 480) {
            logoContent = <Logo240 />;
        } else if (scrollY < 520) {
            logoContent = <Logo260 />;
        } else if (scrollY < 560) {
            logoContent = <Logo280 />;
        } else {
            logoContent = <Logo300 />;
        }
    
    return (
            <>
                <div className={`logo ${addStaticClass ? "logo--static" : ""}`}>

                    {logoContent}
                
                </div>
            </>
          )
}
export default Logo;
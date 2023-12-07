import { useEffect, useState } from "react";
import Mostrador20 from "./mostrador-variations/Mostrador20";
import Mostrador40 from "./mostrador-variations/Mostrador40";
import Mostrador60 from "./mostrador-variations/Mostrador60";
import Mostrador80 from "./mostrador-variations/Mostrador80";
import Mostrador100 from "./mostrador-variations/Mostrador100";
import Mostrador120 from "./mostrador-variations/Mostrador120";
import Mostrador140 from "./mostrador-variations/Mostrador140";
import Mostrador160 from "./mostrador-variations/Mostrador160";
import Mostrador180 from "./mostrador-variations/Mostrador180";
import Mostrador200 from "./mostrador-variations/Mostrador200";
import Mostrador220 from "./mostrador-variations/Mostrador220";
import Mostrador240 from "./mostrador-variations/Mostrador240";
import Mostrador260 from "./mostrador-variations/Mostrador260";
import Mostrador280 from "./mostrador-variations/Mostrador280";
import Mostrador300 from "./mostrador-variations/Mostrador300";

import "./Mostrador.scss"


const Mostrador = () => {

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

    let mostradorContent;

        if (scrollY < 40) {
            mostradorContent = <Mostrador20 />;
        } else if (scrollY < 80) {
            mostradorContent = <Mostrador40 />;
        } else if (scrollY < 120) {
            mostradorContent = <Mostrador60 />;
        } else if (scrollY < 160) {
            mostradorContent = <Mostrador80 />;
        } else if (scrollY < 200) {
            mostradorContent = <Mostrador100 />;
        } else if (scrollY < 240) {
            mostradorContent = <Mostrador120 />;
        } else if (scrollY < 280) {
            mostradorContent = <Mostrador140 />;
        } else if (scrollY < 320) {
            mostradorContent = <Mostrador160 />;
        } else if (scrollY < 360) {
            mostradorContent = <Mostrador180 />;
        } else if (scrollY < 400) {
            mostradorContent = <Mostrador200 />;
        } else if (scrollY < 440) {
            mostradorContent = <Mostrador220 />;
        } else if (scrollY < 480) {
            mostradorContent = <Mostrador240 />;
        } else if (scrollY < 520) {
            mostradorContent = <Mostrador260 />;
        } else if (scrollY < 560) {
            mostradorContent = <Mostrador280 />;
        } else {
            mostradorContent = <Mostrador300 />;
        }
    
    return (
            <>
                <div className={`mostrador ${addStaticClass ? "mostrador--static" : ""}`}>

                    {mostradorContent}
                
                </div>
            </>
          )
}
export default Mostrador;
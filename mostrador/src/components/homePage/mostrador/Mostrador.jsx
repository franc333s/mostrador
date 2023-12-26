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

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

    let scrollSpeed = isMobile ? 1 : 0.66;

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > (window.innerHeight * 0.69 * scrollSpeed)) {
                setAddStaticClass(true);
            } else {
                setAddStaticClass(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const scrollPositions = [
        { limit: 6, component: <Mostrador20 /> },
        { limit: 12, component: <Mostrador40 /> },
        { limit: 18, component: <Mostrador60 /> },
        { limit: 24, component: <Mostrador80 /> },
        { limit: 30, component: <Mostrador100 /> },
        { limit: 36, component: <Mostrador120 /> },
        { limit: 42, component: <Mostrador140 /> },
        { limit: 48, component: <Mostrador160 /> },
        { limit: 54, component: <Mostrador180 /> },
        { limit: 60, component: <Mostrador200 /> },
        { limit: 66, component: <Mostrador220 /> },
        { limit: 72, component: <Mostrador240 /> },
        { limit: 78, component: <Mostrador260 /> },
        { limit: 84, component: <Mostrador280 /> },
        { limit: Infinity, component: <Mostrador300 /> },
    ];

    const getCurrentMostradorContent = () => {
        for (const { limit, component } of scrollPositions) {
            if (scrollY < (window.innerHeight * (limit / 100) * scrollSpeed)) {
                return component;
            }
        }

        return scrollPositions[scrollPositions.length -1].component;
    };

    const mostradorContent = getCurrentMostradorContent();

    
    return (
            <>
                <div className="mostrador">

                    {mostradorContent}
                
                </div>
            </>
          )
}
export default Mostrador;
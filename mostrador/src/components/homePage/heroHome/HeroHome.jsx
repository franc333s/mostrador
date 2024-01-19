import React from 'react';
import './HeroHome.scss';

const LazyBgVideo = React.lazy(() => import ("../bgVideo/BgVideo"));
const LazyMostrador = React.lazy(() => import ("../mostrador/Mostrador"));

function HeroHome() {

    return (
        <>
            <section className="home-hero">
                <LazyBgVideo />
                <LazyMostrador />
            </section>
        </>
    )
}

export default HeroHome;




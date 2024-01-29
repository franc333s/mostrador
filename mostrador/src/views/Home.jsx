import React from "react";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";

// Import() components
const LazyHeroHome = React.lazy(() => import ("../components/homePage/heroHome/HeroHome"));
const LazyProductsFeed = React.lazy(() => import ("../components/homePage/productsHome/productsFeed/ProductsFeed"));



function Home() {

    return (
        <>
            <LazyHeroHome />
            <Topbar />
            <LazyProductsFeed />
            <Footer />
        </>
    );
}

export default Home;

import React from "react";

// Import() components
const HeroHome = React.lazy(() => import ("../components/homePage/heroHome/HeroHome"));
const Topbar = React.lazy(() => import ("../components/topbar/Topbar"));
const ProductsFeed = React.lazy(() => import ("../components/homePage/productsHome/productsFeed/ProductsFeed"));
const Footer = React.lazy(() => import ("../components/footer/Footer"));

function Home() {
    return (
        <>
            <HeroHome />
            <Topbar />
            <ProductsFeed />
            <Footer />
        </>
    );
}

export default Home;

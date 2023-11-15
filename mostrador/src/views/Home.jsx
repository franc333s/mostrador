import InfoHome from "../components/infoHome/InfoHome";
import ProductsFeed from "../components/products/productsFeed/ProductsFeed";
import HeroHome from "../components/heroHome/HeroHome";



function Home() {
    return (
        <>
            <HeroHome />
            <InfoHome />
            <ProductsFeed />
        </>
    );
}

export default Home;

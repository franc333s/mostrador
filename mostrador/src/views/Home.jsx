import InfoHome from "../components/infoHome/InfoHome";
import ProductsFeed from "../components/productsAtHome/productsFeed/ProductsFeed";
import HeroHome from "../components/heroHome/HeroHome";
import ButtonPrimary from "../components/buttons/ButtonPrimary";




function Home() {
    return (
        <>
            <HeroHome />
            <InfoHome />
            <ProductsFeed />
            <ButtonPrimary className="btn" text="hellow"/>
        </>
    );
}

export default Home;

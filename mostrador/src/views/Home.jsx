import ProductsFeed from "../components/productsAtHome/productsFeed/ProductsFeed";
import HeroHome from "../components/heroHome/HeroHome";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Topbar from "../components/topbar/Topbar";




function Home() {
    return (
        <>
            <HeroHome />
            <Topbar />
            <ProductsFeed />
            <ButtonPrimary className="btn" text="hellow"/>
        </>
    );
}

export default Home;

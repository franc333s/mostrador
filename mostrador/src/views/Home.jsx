import ProductsFeed from "../components/productsAtHome/productsFeed/ProductsFeed";
import HeroHome from "../components/heroHome/HeroHome";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";




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

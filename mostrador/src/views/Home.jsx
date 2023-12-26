import ProductsFeed from "../components/homePage/productsHome/productsFeed/ProductsFeed";
import HeroHome from "../components/homePage/heroHome/HeroHome";
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

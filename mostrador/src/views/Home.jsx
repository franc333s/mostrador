import Info from "../components/info/info";
import Logo from "../components/logo/Logo";
import ProductsFeed from "../components/products/productsFeed/ProductsFeed";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
YoutubeEmbed


function Home() {
    return (
        <>
            <div>
                <YoutubeEmbed embedId="x7EgG-MuCDY"/>
                <Logo />
            </div>
            
            <Info />
            <ProductsFeed />
        </>
    );
}

export default Home;

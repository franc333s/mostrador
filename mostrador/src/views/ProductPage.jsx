import { useParams } from "react-router-dom"
import ProductDescription from "../components/productPage/productDescription/ProductDescription";
import ProductGallery from "../components/productPage/productGallery/ProductGallery"
import ProductHero from "../components/productPage/productHero/ProductHero"
import ProductHighlights from "../components/productPage/productHighlights/ProductHighlights";

import productsData from "./../json/productsData.json"


function ProductPage() {

    const { slug } = useParams();

    const product = productsData.find((product) => product.slug === slug);

    return (

        <>
        <main>

            <ProductHero 
                heroImg={product.heroImg}
                heroImgAltText={product.heroImgAltText}
            />

            <ProductHighlights 
                name={product.name}
                by={product.by}
                year={product.year}
                material={product.material}
                dimensions={product.dimensions}
                nameSecondary={product.nameSecondary}
            />

            <ProductDescription 
                about={product.about}
                edition={product.edition}
            />

            <ProductGallery />

        </main>
        </>
    )
}

export default ProductPage
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ProductDescription from "../components/productPage/productDescription/ProductDescription";
import ProductGallery from "../components/productPage/productGallery/ProductGallery"
import ProductHero from "../components/productPage/productHero/ProductHero"
import ProductIntro from "../components/productPage/productIntro/ProductIntro";
import Topbar from "../components/topbar/Topbar";

import db from "../firebase/config";


function ProductPage() {

    const { slug } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const obtainProduct = async () => {
            try {
                const productsRef = collection(db, "products");
                const q = query(productsRef, where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    setProduct(doc.data());
                });
            } catch (error) {
                console.error("Error getting product:", error);
            }
        };

        obtainProduct();
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Topbar />

            <main className="product">
                <div className="product__top">
                    
                    <ProductHero 
                        heroImg={product.heroImg}
                        heroImgAltText={product.heroImgAltText}
                    />

                </div>


                <div className="product__bottom">

                    <ProductIntro 
                        productName={product.productName}
                        designer={product.designer}
                        year={product.year}
                        material={product.material}
                        dimensions={product.dimensions}
                        nameSecondary={product.nameSecondary}
                    />

                    <ProductDescription 
                        productDescription={product.productDescription}
                        editionType={product.editionType}
                    />

                    <ProductGallery product={product} />

                </div>
            </main>
        </>
    )
}

export default ProductPage
import React, { useState, useEffect, Suspense } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom"
import db from "../firebase/config";

import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
import BounceLoader from "react-spinners/BounceLoader";

// Import() components
const LazyProductHero = React.lazy(() => import ("../components/productPage/productHero/ProductHero"));
const LazyProductIntro = React.lazy(() => import ("../components/productPage/productIntro/ProductIntro"));
const LazyProductDescription = React.lazy(() => import ("../components/productPage/productDescription/ProductDescription"));
const LazyProductGallery = React.lazy(() => import ("../components/productPage/productGallery/ProductGallery"));

function OneProductPage() {

    const { slug } = useParams();
    const [ product, setProduct ] = useState(null);

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


    return (
        <>
            <Topbar />

            <main className="product">

                {product && (
                    <>
                    
                    <div className="product__top">

                        <Suspense fallback={
                            <div className="preloader">
                                <BounceLoader color="#000000" size={30} />
                            </div>
                        }>

                            <LazyProductHero 
                                heroImg={product.heroImg}
                                heroImgAltText={product.heroImgAltText}
                            />

                        </Suspense>

                    </div>

                    <div className="product__bottom">

                        <Suspense fallback={
                            <div className="preloader">
                                <BounceLoader color="#000000" size={30} />
                            </div>
                        }>

                            <LazyProductIntro 
                                productName={product.productName}
                                productType={product.productType}
                                designer={product.designer}
                                year={product.year}
                                material={product.material}
                                dimensions={product.dimensions}
                                nameSecondary={product.nameSecondary}
                            />

                            <LazyProductDescription 
                                productDescription={product.productDescription}
                                editionType={product.editionType}
                            />

                            <LazyProductGallery 
                                product={product} 
                            />

                        </Suspense>

                        <Footer />

                    </div>

                    </>
                )}

            </main>

        </>
    )
}

export default OneProductPage
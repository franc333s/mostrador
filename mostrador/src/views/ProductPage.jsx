import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom"
import db from "../firebase/config";


// Import() components
const Topbar = React.lazy(() => import ("../components/topbar/Topbar"));
const ProductHero = React.lazy(() => import ("../components/productPage/productHero/ProductHero"));
const ProductIntro = React.lazy(() => import ("../components/productPage/productIntro/ProductIntro"));
const ProductDescription = React.lazy(() => import ("../components/productPage/productDescription/ProductDescription"));
const ProductGallery = React.lazy(() => import ("../components/productPage/productGallery/ProductGallery"));
const Footer = React.lazy(() => import ("../components/footer/Footer"));

// Import() svg
const Mostrador20 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador20"));
const Mostrador40 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador40"));
const Mostrador60 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador60"));
const Mostrador80 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador80"));
const Mostrador100 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador100"));
const Mostrador120 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador120"));
const Mostrador140 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador140"));
const Mostrador160 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador160"));
const Mostrador180 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador180"));
const Mostrador200 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador200"));
const Mostrador220 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador220"));
const Mostrador240 = React.lazy(() => import ("../components/homePage/mostrador/mostrador-variations/Mostrador240"));

function ProductPage() {

    const { slug } = useParams();

    const [ product, setProduct ] = useState(null);

   //
    const [ isLoading, setIsLoading ] = useState(true);
    const [ svgIndex, setSvgIndex ] = useState(0);
    const svgs = [ Mostrador20, Mostrador40, Mostrador60, Mostrador80, Mostrador100, Mostrador120, Mostrador140, Mostrador160, Mostrador180, Mostrador200, Mostrador220, Mostrador240 ];
   //

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



    useEffect(() => {
        const loadSVGs = () => {
            const interval = setInterval(() => {
                setSvgIndex((prevIndex) => {
                    if (prevIndex < svgs.length - 1) {
                        return prevIndex + 1;
                    } else {
                        clearInterval(interval);
                        setIsLoading(false);
                        return prevIndex;
                    }
                });
            }, 400); // Set time to load
    };

        loadSVGs();
    },);

    if (!product || isLoading) {
        return (
            <div className="preloader">
                {svgs.slice(0, svgIndex + 1).map((SVGComponent, index) => (
                    <SVGComponent key={index} />
                ))}
            </div>
        );
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
                        productType={product.productType}
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

                    
                    <Footer />
                </div>

            </main>




            
        </>
    )
}

export default ProductPage
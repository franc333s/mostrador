import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Footer from "../components/footer/Footer";
import ProductDescription from "../components/productPage/productDescription/ProductDescription";
import ProductGallery from "../components/productPage/productGallery/ProductGallery"
import ProductHero from "../components/productPage/productHero/ProductHero"
import ProductIntro from "../components/productPage/productIntro/ProductIntro";
import Topbar from "../components/topbar/Topbar";

import db from "../firebase/config";

import Mostrador20 from "../components/homePage/mostrador/mostrador-variations/Mostrador20";
import Mostrador40 from "../components/homePage/mostrador/mostrador-variations/Mostrador40";
import Mostrador60 from "../components/homePage/mostrador/mostrador-variations/Mostrador60";
import Mostrador80 from "../components/homePage/mostrador/mostrador-variations/Mostrador80";
import Mostrador100 from "../components/homePage/mostrador/mostrador-variations/Mostrador100";
import Mostrador120 from "../components/homePage/mostrador/mostrador-variations/Mostrador120";
import Mostrador140 from "../components/homePage/mostrador/mostrador-variations/Mostrador140";
import Mostrador160 from "../components/homePage/mostrador/mostrador-variations/Mostrador160";
import Mostrador180 from "../components/homePage/mostrador/mostrador-variations/Mostrador180";
import Mostrador200 from "../components/homePage/mostrador/mostrador-variations/Mostrador200";
import Mostrador220 from "../components/homePage/mostrador/mostrador-variations/Mostrador220";
import Mostrador240 from "../components/homePage/mostrador/mostrador-variations/Mostrador240";

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
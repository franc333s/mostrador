import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ProductDescription from "../components/productPage/productDescription/ProductDescription";
import ProductGallery from "../components/productPage/productGallery/ProductGallery"
import ProductHero from "../components/productPage/productHero/ProductHero"
import ProductHighlights from "../components/productPage/productHighlights/ProductHighlights";

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
        <main>

            <ProductHero 
                heroImg={product.heroImg}
                heroImgAltText={product.heroImgAltText}
            />

            <ProductHighlights 
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

        </main>
        </>
    )
}

export default ProductPage
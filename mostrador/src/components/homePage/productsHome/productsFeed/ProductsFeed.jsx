import React, { useEffect, useState, Suspense } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "../../../../firebase/config";
import "./ProductsFeed.scss";

import BounceLoader from "react-spinners/BounceLoader";

// Import() components
const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

function ProductsFeed() {

    const [ products, setProducts ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(true);

    useEffect(() => {
        const obtainProducts = async () => {
            try {
                const dataCollection = [];
                const q = query(collection(db, "products"), orderBy("index"));

                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    dataCollection.push(doc.data());
                });

                setProducts(dataCollection);
                //
                setIsFetching(false);
                //
            } catch (error) {
                console.error("Error fetching products:", error);
                setIsFetching(false);
            } 
        };

        obtainProducts();

    }, []);

    return (
            <main className="products-feed">
                {isFetching ? (
                    <div className="preloader">
                        <BounceLoader color="#000000" size={30} />
                    </div>
                ) : (
                    <Suspense fallback={
                        <div className="preloader">
                            <BounceLoader color="#000000" size={30} />
                        </div>}>
                            {products.map((product) => (
                                <LazyProductCard 
                                    key={product.id}
                                    url={product.url}
                                    index={product.index}
                                    productName={product.productName}
                                    productImg={product.productImg}
                                    productImgAltText={product.productImgAltText}
                                    productType={product.productType}
                                    designer={product.designer}
                                />
                            ))}
                    </Suspense>
                )}
            </main>
    )
}

export default ProductsFeed;
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "../../../firebase/config";
import OneProduct from "../oneProduct/OneProduct";
import "./ProductsFeed.scss";




function ProductsFeed() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const obtainProducts = async () => {
            const dataCollection = [];
            const q = query(collection(db, "products"), orderBy("index"));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                dataCollection.push(doc.data());
            });

            setProducts(dataCollection);
        };

        obtainProducts();

    }, []);


    return (
        <> 
        <main className="products">
            {products.map((product) => 
            <OneProduct 
                key={product.id}
                url={product.url}
                index={product.index}
                productName={product.productName}
                productImg={product.productImg}
                productImgAltText={product.productImgAltText}
                productType={product.productType}
                designer={product.designer}
                material={product.material}
                dimensions={product.dimensions}
            />
            )}  
        </main>
        </>
    )
}

export default ProductsFeed;
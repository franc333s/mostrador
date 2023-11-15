import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "../../../firebase/config";
import OneProduct from "../oneProduct/OneProduct";
//import productsData from "../../../json/productsData.json"
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
        <section className="products">
            {products.map((product) => 
            <OneProduct 
                key={product.id}
                index={product.index}
                productName={product.productName}
                productImg={product.productImg}
                productType={product.productType}
                designer={product.designer}
                specifications={product.specifications}
                price={product.price}
            />
            )}  
        </section>
        </>
    )
}

export default ProductsFeed;
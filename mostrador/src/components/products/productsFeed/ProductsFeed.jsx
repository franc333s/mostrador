
import OneProduct from "../oneProduct/OneProduct";
import productsData from "../../../json/productsData.json"
import "./ProductsFeed.scss";


function ProductsFeed() {

    return (
        <> 
        <section className="products">
            {productsData.map((product) => 
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
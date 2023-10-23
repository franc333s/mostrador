import "./OneProduct.scss";


function OneProduct({ index, productImg, productName, productType, designer, specifications, price}) {

    return (
        <>
        <article className="one-product">

            <div className="one-product__front">
                <div className="one-product__id">/ {index}</div>
                <img className="one-product__img" src={productImg} alt="" />
            </div>

            <div className="one-product__back">
                <div className="one-product__info">{productName}, {productType}, {designer}</div>
                <div className="one-product__meas">{specifications}</div>
                <div className="one-product__price">{price}</div>
            </div>
 
        </article>
        </>
    )
}

export default OneProduct;
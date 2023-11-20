import { Link } from "react-router-dom";
import "./OneProduct.scss";



function OneProduct({ url, index, productImg, productImgAltText, productName, productType, designer, material, dimensions}) {

    return (
        <>
        <Link to={url}>

            <article className="one-product">
                    <div className="one-product__front">
                        <p className="one-product__id">/ {index}</p>
                        <img className="one-product__img" src={productImg} alt={productImgAltText} />
                    </div>

                    <div className="one-product__back">
                        <p className="one-product__info"><span className="text-dec--underline"><span className="text-trans--uppercase">{productName}</span>, {productType}</span>. {designer}</p>
                        <p className="one-product__meas">{material}. {dimensions}</p>
                        <p className="one-product__price">Inquire</p>
                    </div>

            </article>
        </Link>
        </>
    )
}

export default OneProduct;
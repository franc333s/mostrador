import { Link } from "react-router-dom";
import "./OneProduct.scss";



function OneProduct({ url, index, productImg, productImgAltText, productName, productType, designer, material, specifications}) {

    return (
        <>
        <Link to={url}>

            <article className="one-product">
                    <div className="one-product__front">
                        <div className="one-product__id">/ {index}</div>
                        <img className="one-product__img" src={productImg} alt={productImgAltText} />
                    </div>

                    <div className="one-product__back">
                        <div className="one-product__info"><span className="text-dec--underline"><span className="text-trans--uppercase">{productName}</span>, {productType}</span>. {designer}</div>
                        <div className="one-product__meas">{material}. {specifications}</div>
                        <div className="one-product__price">Inquire</div>
                    </div>

            </article>
        </Link>
        </>
    )
}

export default OneProduct;
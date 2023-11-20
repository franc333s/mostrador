import { Link } from "react-router-dom"
import "./ProductDescription.scss"


function ProductDescription({ productDescription, editionType }) {

    return (
        <>
        <section className="product-desc">
                <div>
                    <h3 className="product-desc__title">About</h3>
                    <p>{productDescription}</p>
                </div>

                <aside className="product-desc__aside">
                    <div>
                        <h3 className="product-desc__title">Edition</h3>
                        <p>{editionType}</p>
                    </div>

                    <div>
                        <h3 className="product-desc__title">Purchase</h3>
                        <p className="product-desc__cta"><Link>Inquire</Link></p>
                    </div>
                </aside>
            </section>

        </>
    )

}

export default ProductDescription
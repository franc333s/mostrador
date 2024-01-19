import ButtonPrimary from "../../buttons/ButtonPrimary"
import "./ProductDescription.scss"


function ProductDescription({ productDescription, editionType }) {

    return (
        <>
        <section className="product-desc">
            <div>
                <p className="product-desc__title">About</p>
                <p className="product-desc__text product-desc__text--width">{productDescription}</p>
            </div>

            <aside className="product-desc__aside">
                <div>
                    <p className="product-desc__title">Edition</p>
                    <p className="product-desc__text">{editionType}</p>
                </div>

                <div>
                    <p className="product-desc__title">Purchase</p>
                    <ButtonPrimary to="mailto:contact@mostradorgallery.com" text="Inquire" openInNewTab />
                </div>
            </aside>
        </section>

        </>
    )

}

export default ProductDescription
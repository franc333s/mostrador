import "./ProductHighlights.scss"

function ProductHighlights({ name, by, year, material, dimensions, nameSecondary }) {

    return (
        <>
        <section className="product-hl">
                <div>
                    <p className="product-hl__title">Name</p>
                    <h1 className="product-hl__text">{name}</h1>
                </div>

                <div>
                    <p className="product-hl__title">By</p>
                    <h2 className="product-hl__text">{by}</h2>
                </div>

                <div>
                    <p className="product-hl__title">Year</p>
                    <p className="product-hl__text">{year}</p>
                </div>

                <div>
                    <div>
                        <p className="product-hl__title">Material</p>
                        <p className="product-hl__text">{material}</p>
                    </div>

                    <div>
                        <p className="product-hl__title">Dimensions</p>
                        <p className="product-hl__text">{dimensions}</p>
                    </div>
                </div>

                <div>
                    <p className="product-hl__text--variation">{nameSecondary}</p>
                </div>
            </section>
        </>
    )

}

export default ProductHighlights
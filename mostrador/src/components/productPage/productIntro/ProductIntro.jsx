import "./ProductIntro.scss"

function ProductIntro({ productName, designer, year, material, dimensions, nameSecondary }) {

    return (
        <>
        <section className="product-intro">
                <div>
                    <p className="product-intro__title">Name</p>
                    <h1 className="product-intro__text">{productName}</h1>
                </div>

                <div>
                    <p className="product-intro__title">By</p>
                    <h2 className="product-intro__text">{designer}</h2>
                </div>

                <div>
                    <p className="product-intro__title">Year</p>
                    <p className="product-intro__text">{year}</p>
                </div>

                <div className="product-intro__mat-dim">
                    <div>
                        <p className="product-intro__title">Material</p>
                        <p className="product-intro__text">{material}</p>
                    </div>

                    <div>
                        <p className="product-intro__title">Dimensions</p>
                        <p className="product-intro__text">{dimensions}</p>
                    </div>
                </div>

                <div>
                    <p className="product-intro__text--variation">{nameSecondary}</p>
                </div>
            </section>
        </>
    )

}

export default ProductIntro
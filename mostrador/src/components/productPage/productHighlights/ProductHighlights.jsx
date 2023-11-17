

function ProductHighlights({ name, by, year, material, dimensions, nameSecondary }) {

    return (
        <>
        <section>
                <div>
                    <p>Name</p>
                    <h1>{name}</h1>
                </div>

                <div>
                    <p>By</p>
                    <h2>{by}</h2>
                </div>

                <div>
                    <p>Year</p>
                    <p>{year}</p>
                </div>

                <div>
                    <div>
                        <p>Material</p>
                        <p>{material}</p>
                    </div>

                    <div>
                        <p>Dimensions</p>
                        <p>{dimensions}</p>
                    </div>
                </div>

                <div>
                    <p>{nameSecondary}</p>
                </div>
            </section>
        </>
    )

}

export default ProductHighlights
import "./ProductHero.scss"

function ProductHero({ heroImg, heroImgAltText }) {

    return (
        <>
        <section className="product-hero">
            <img className="product-hero__img" src={heroImg} alt={heroImgAltText} />
        </section>
        </>
    )
}

export default ProductHero
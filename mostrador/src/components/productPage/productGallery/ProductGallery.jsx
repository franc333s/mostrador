import ProductGalleryItem from "../productGalleryItem/ProductGalleryItem"
import "./ProductGallery.scss"

function ProductGallery({ product }) {

    return (
        <>
        <section className="product-gallery">

            {product && product.productGallery && product.productGallery.map((item) => 
            <ProductGalleryItem 
                key={item.id}
                index={item.index}
                figText={item.figText}
                figImg={item.figImg}
                figImgAltText={item.figImgAltText}
            />
            )}  
        </section>
        </>
    )
}

export default ProductGallery
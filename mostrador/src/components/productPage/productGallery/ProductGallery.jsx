import ProductGalleryItem from "../productGalleryItem/ProductGalleryItem"
import "./ProductGallery.scss"

function ProductGallery({ product }) {

    return (
        <>
        <section className="gallery">

            {product && product.gallery && product.gallery.map((item) => 
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
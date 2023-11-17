import ProductGalleryItem from "../productGalleryItem/ProductGalleryItem"
import "./ProductGallery.scss"

import oneProductImg from "./../../../json/oneProductImg.json";


function ProductGallery() {

    return (
        <>
        <section className="gallery">

            {oneProductImg.map((product) => 
            <ProductGalleryItem 
                key={product.id}
                index={product.index}
                figText={product.figText}
                figImg={product.figImg}
                figImgAltText={product.figImgAltText}
            />
            )}  
        </section>
        </>
    )
}

export default ProductGallery
import "./ProductGalleryItem.scss"

function ProductGalleryItem({ figIndex, figText, figImg, figImgAltText }) {

    return (
        <><div className="product-gallery__item">
            <div className="product-gallery__item__title">
                <p>{figIndex}</p>
                <p>—</p>
                <p>{figText}</p>
            </div>
            <img className="product-gallery__item__img" src={figImg} alt={figImgAltText} />
        </div>
        
        </>
    )
}

export default ProductGalleryItem
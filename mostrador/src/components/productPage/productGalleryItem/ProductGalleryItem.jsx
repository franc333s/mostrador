import "./ProductGalleryItem.scss"

function ProductGalleryItem({ index, figText, figImg, figImgAltText }) {

    return (
        <><div className="gallery__item">
            <div className="gallery__item__title">
                <p>Fig. {index}</p>
                <p>—</p>
                <p>{figText}</p>
            </div>
            <img className="gallery__item__img" src={figImg} alt={figImgAltText} />
        </div>
        
        </>
    )
}

export default ProductGalleryItem
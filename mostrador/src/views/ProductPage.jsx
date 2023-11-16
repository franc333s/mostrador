import ProductGallery from "../components/productPage/productGallery/ProductGallery"
import ProductHero from "../components/productPage/productHero/ProductHero"


function ProductPage() {

    return (
        <>
        <main>
            <ProductHero />

            <section>
                <div>
                    <p>Name</p>
                    <h1>CC coffee table</h1>
                </div>

                <div>
                    <p>By</p>
                    <h2>Cuatro Cuatros</h2>
                </div>

                <div>
                    <p>Year</p>
                    <p>2023</p>
                </div>

                <div>
                    <div>
                        <p>Material</p>
                        <p>Stainless steal</p>
                    </div>

                    <div>
                        <p>Dimensions</p>
                        <p>45x44x120 [cm]</p>
                    </div>
                </div>

                <div>
                    <p>Gesto</p>
                </div>
            </section>

            <section>
                <div>
                    <h3>About</h3>
                    <p>Founded in 2023, Mostrador is dedicated to showcasing works at the interection of art and design, where the utility of an object meets its aesthetic potential.&emsp;&emsp;Mostrador provides a platform for artists and designers to expertiment with the boundaries of function and form, showcasing both established and emerging talents, at Mostrador we believe that the process of creation is just as imoprtant as the finished product, and our curatorial program highlights the unique narratives behind each piece.&emsp;&emsp;We are committed to promoting access to the arts, advocating for diversity in design, and exploring the intersections of disciplines. Through our works and publications, we strive to inspire and challenge the perceptions of what is posible in design.</p>
                </div>

                <aside>
                    <div>
                        <p>Material</p>
                        <p>Stainless steal</p>
                    </div>

                    <div>
                        <p>Dimensions</p>
                        <p>45x44x120 [cm]</p>
                    </div>
                </aside>
            </section>
            
            <section>
                <ProductGallery />
            </section>

        </main>
        </>
    )
}

export default ProductPage
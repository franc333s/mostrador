import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductPage from "./views/ProductPage";
import About from "./views/About";
import "./fonts/TINY5x3-160.woff2";
import "./fonts/TINY5x3-160.woff";
import "./scss/global.scss";




function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:slug' element={<ProductPage />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </>
  )
}

export default App

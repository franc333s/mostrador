import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductPage from "./views/ProductPage";

import "./scss/global.scss";



function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:slug' element={<ProductPage />} />
        </Routes>
    </>
  )
}

export default App

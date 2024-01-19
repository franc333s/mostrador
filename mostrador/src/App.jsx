import { Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./views/Home";
import OneProductPage from "./views/OneProductPage";
import About from "./views/About";

import "./fonts/TINY5x3-160.woff2";
import "./fonts/TINY5x3-160.woff";
import "./scss/global.scss";




function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <meta name="description" content="Mostrador is a collectible design gallery showcasing works at the intersection of art and design from contemporary designers and emerging talents."/>
        </Helmet>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works/:slug' element={<OneProductPage />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App

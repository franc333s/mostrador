import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";

import "./scss/global.scss";



function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default App

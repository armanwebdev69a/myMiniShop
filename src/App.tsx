import Home from "./cpmponents/Home"
import Header from "./cpmponents/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"


function App() {
  return (
    <BrowserRouter>
    <Header />

    <hr className="border-[#8CB369]"/>

    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
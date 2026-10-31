import Home from "./cpmponents/Home"
import Header from "./cpmponents/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import Likes from "./cpmponents/Likes";
import Bascket from "./cpmponents/Bascket";
import { BascketProvider } from "./cpmponents/BascketContext";
import { LikesProvider } from "./cpmponents/LikesContext";
import { SearchProvider } from "./cpmponents/SearchValue";
export function NotFound(){
  return (
    <h1 className="text-2xl mt-20 ml-20">Not found the page</h1>
  )
}


function App() {
  return (
    <LikesProvider>
    <BascketProvider>
    <BrowserRouter>
    <SearchProvider>
    <Header />


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/bascket" element={<Bascket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </SearchProvider>
    </BrowserRouter>
    </BascketProvider>
    </LikesProvider>
  )
}

export default App
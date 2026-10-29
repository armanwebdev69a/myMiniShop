import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [show,setShow] = useState(false)
  return (
    <div  className=" bg-[#8CB369] m-5 p-3 sm:px-8 flex justify-between items-center rounded-md">
        <form>
            
            {show ? <input dir="rtl" type="text" placeholder="اسم محصولی رو وارد کنید ؟" className="bg-white  sm:w-70 sm:h-10  h-8 outline-none border rounded-md border-stone-500 p-3 "/> : <button onClick={()=>setShow(!show)}><img className="w-7 sm:w-15" src="https://freesvg.org/img/magnifying-glass.png" alt="search" /></button>}
        </form>
        <div className="flex gap-3  items-center">
            <Link to={"/likes"} className="cursor-pointer"><img className="w-7 sm:w-15" src="https://freesvg.org/img/agone-Heart.png" alt="likes" /></Link>
            <Link to={"/basket"} className="cursor-pointer"><img className="w-7 sm:w-15" src="https://freesvg.org/img/johnny_automatic_5_8_bushel_basket.png" alt="bascket" /></Link>
            <Link to={"/"} className="cursor-pointer"><img className="w-7 sm:w-15" src="https://freesvg.org/img/1439764037.png" alt="homes" /></Link>
        </div>
    </div>
  )
}

export default Header
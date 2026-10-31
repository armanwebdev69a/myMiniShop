import { useBasket } from "./BascketContext"

function Bascket() {
    const { bascketArr } = useBasket()
    const {price} = useBasket()
  return (
    <div dir="rtl" className="mt-30 gap-4 text-2xl">
        <div className="flex flex-wrap p-10 gap-10 justify-around items-center">
            {bascketArr.map((i)=>(
                <div dir="rtl" className="card w-70 gap-3">
                    <img className="card-img w-70" src={i.imgURL} alt="pic" />
                    <h2 className="card-title">اسم محصول : {i.title}</h2>
                    <h3>قیمت :‌{i.price}</h3>
                </div>
            ))}
        </div>
        <div className="flex flex-col items-start p-5 gap-3 mt-10 mr-50">
            جمع خرید شما : {<span className="flex gap-3">{price}</span>}
            <button className="bg-green-500 py-2 px-3 rounded-md cursor-pointer">پرداخت</button>
        </div>
        
    </div>
  )
}

export default Bascket
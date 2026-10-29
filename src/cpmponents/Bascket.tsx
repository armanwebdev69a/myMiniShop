import { useBasket } from "./BascketContext"

function Bascket() {
    const { bascket } = useBasket()
    const {price} = useBasket()
  return (
    <div className="flex items-center flex-col mt-40 gap-4 text-2xl">
        <div>
            خرید های شما :‌ {bascket.map((i)=><span key={crypto.randomUUID()} className="flex gap-3">{i}</span>)}
        </div>
        <div>
            جمع خرید شما : {<span className="flex gap-3">{price}</span>}
        </div>
        <button className="bg-green-500 py-2 px-3 rounded-md cursor-pointer">پرداخت</button>
    </div>
  )
}

export default Bascket
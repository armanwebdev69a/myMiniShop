import ItemCard from "./ItemCard"
import { datas } from "../Data"
import { useState } from "react"
import { useBasket } from "./BascketContext"
import { useLikes } from "./LikesContext"

function Home() {
    const { addBascket, addNum } = useBasket()
    const { addLike, liked } = useLikes()
    
    const [products, setProducts] = useState(datas)

    const handleBuy = (id: string, title: string, price: number) => {
        const targetP = products.find(p => p.id === id)
        if (!targetP || targetP.quantity <= 0) {
            alert("موجودی تموم شد")
            return;
        }
        addBascket(title)
        
        setProducts(products.map(i => {
            if (i.id === id) {
                return { ...i, quantity: i.quantity - 1 }
            }
            return i
        }))
        addNum(price)
    }

    return (
        <div className="flex flex-wrap justify-around gap-20 items-center">
            {products.map((i) => {
                const isLiked = liked.includes(i.title);

                return (
                    <ItemCard key={i.id} {...i}>
                        <button 
                            className="bg-green-500 py-2 px-3 rounded-md cursor-pointer text-white" 
                            onClick={() => handleBuy(i.id, i.title, i.price)}
                        >
                            خریدن
                        </button>

                        <button 
                            className={`border border-red-400 py-2 px-3 rounded-md cursor-pointer transition-colors ${
                                isLiked ? "bg-red-500 text-white" : "bg-white text-red-500"
                            }`} 
                            onClick={() => addLike(i.title)}
                        >
                            {isLiked ? "لایک شد ❤️" : "لایک 🤍"}
                        </button>
                    </ItemCard>
                )
            })}
        </div>
    )
}

export default Home

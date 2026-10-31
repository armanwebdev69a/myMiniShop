import React, { createContext, useContext, useState } from "react"

type bascket = {
    title:string,
    price:number,
    imgURL:string
}

interface Bascket {
    bascketArr:bascket[],
    addBascket:(item:bascket) =>void,
    price:number,
    addNum : (newNum:number) =>void
}
const Bascket = createContext<Bascket|null>(null)

export function BascketProvider( {children} : {children:React.ReactNode} ) {
    const [bascketArr,setBascket] = useState<bascket[]>([])
    const addBascket = (item:bascket)=>{
        setBascket(prev => [...prev,item])
    }
    const [price,setPrice] = useState(0)
    const addNum = (newNum:number)=>{
        setPrice(prev=>prev + newNum)
    }
  return (
    <Bascket.Provider value={{bascketArr,addBascket,price,addNum}}>
        {children}
    </Bascket.Provider>
  )
}


export function useBasket() {
  const context = useContext(Bascket)
  if (!context) throw new Error("useBasket باید داخل BasketProvider استفاده بشه!");
  return context;
}


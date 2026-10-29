import React, { createContext, useContext, useState } from "react"

interface Bascket {
    bascket:string[],
    addBascket:(item:string) =>void,
    price:number,
    addNum : (newNum:number) =>void
}

const Bascket = createContext<Bascket|null>(null)

export function BascketProvider( {children} : {children:React.ReactNode} ) {
    const [bascket,setBascket] = useState<string[]>([])
    const addBascket = (item:string)=>{
        setBascket(prev => [...prev,item])
    }
    const [price,setPrice] = useState(0)
    const addNum = (newNum:number)=>{
        setPrice(prev=>prev + newNum)
    }
  return (
    <Bascket.Provider value={{bascket,addBascket,price,addNum}}>
        {children}
    </Bascket.Provider>
  )
}


export function useBasket() {
  const context = useContext(Bascket)
  if (!context) throw new Error("useBasket باید داخل BasketProvider استفاده بشه!");
  return context;
}


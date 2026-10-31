import React, { createContext, useContext, useState } from "react"

type likes = {
    title:string,
    price:number,
    imgURL:string
}

interface Likes {
    likesArr:likes[],
    addLike:(item:likes) =>void,

}
const Likes = createContext<Likes|null>(null)

export function LikesProvider( {children} : {children:React.ReactNode} ) {
    const [likesArr,setLikes] = useState<likes[]>([])
    const addLike = (item:likes)=>{
        setLikes(prev => [...prev,item])
    }
  return (
    <Likes.Provider value={{likesArr,addLike}}>
        {children}
    </Likes.Provider>
  )
}


export function useLikes() {
  const context = useContext(Likes)
  if (!context) throw new Error("useBasket باید داخل BasketProvider استفاده بشه!");
  return context;
}


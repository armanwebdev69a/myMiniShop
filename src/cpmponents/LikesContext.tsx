import React, { createContext, useContext, useState } from "react"


interface Like {
    liked : string[],
    addLike : (newLike:string) => void
}

const Likes = createContext<Like|null>(null)

function LikesContext({children}:{children:React.ReactNode}) {
    const [liked,setLikes] = useState<string[]>([])
    const addLike = (newLike:string)=>{
        setLikes(prev=>[...prev,newLike])
    }
  return (
    <Likes.Provider value={{liked,addLike}}>
        {children}
    </Likes.Provider>
  )
}



export default LikesContext

export function useLikes(){
    const context = useContext(Likes)
    if (!context) throw Error("dd")
    return context
}
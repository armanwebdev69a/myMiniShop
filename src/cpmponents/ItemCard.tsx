import type React from "react"

interface item {
    children:React.ReactNode,
    title:string,
    id:string,
    quantity:number
    imgURL:string,
    price:number,
}

function ItemCard( {title,price,quantity,imgURL,children} : item ) {
  return (
        <div className="flex flex-col">
            <img src={imgURL} alt="pic" />
            <div className="flex gap-2 flex-col items-end px-5 py-2">
                <h2 className="text-2xl">اسم : {title}</h2>
                <h3 className="text-xl">قیمت : {price}</h3>
                <p className="text-xl">تعداد : {quantity}</p>
                {children}
            </div>
        </div>
  )
}

export default ItemCard
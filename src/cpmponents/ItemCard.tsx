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
        <div className="card">
            <img className="mix-blend" src={imgURL} alt="pic" />
            <div className="flex gap-2 flex-col items-end px-5 py-2">
                <h2 className="card-title">اسم : {title}</h2>
                <div className="card-body">
                    <h3>قیمت : {price}</h3>
                    <p>تعداد : {quantity}</p>
                </div>
                {children}
            </div>
        </div>
  )
}

export default ItemCard
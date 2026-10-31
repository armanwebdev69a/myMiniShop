import { useLikes } from "./LikesContext"

function Likes() {
    const { likesArr } = useLikes()
  return (
    <div dir="rtl" className="mt-30 gap-4 text-2xl">
        <div className="flex flex-wrap p-10 gap-10 justify-around items-center">
            {likesArr.map((i)=>(
                <div dir="rtl" className="card w-70 gap-3">
                    <img className="card-img w-70" src={i.imgURL} alt="pic" />
                    <h2 className="card-title">اسم محصول : {i.title}</h2>
                    <h3>قیمت :‌{i.price}</h3>
                </div>
            ))}
        </div>        
    </div>
  )
}

export default Likes
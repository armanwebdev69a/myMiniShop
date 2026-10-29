import { useLikes } from "./LikesContext"

function Likes() {
    const {liked} = useLikes()
  return (
    <div className="flex justify-center mt-30 text-2xl">
        محصولاتی که لایک کردید : {liked.map(i=>(
            <span className="flex ml-3" key={crypto.randomUUID()}>{i}</span>
        ))}
    </div>
  )
}

export default Likes
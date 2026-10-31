import ItemCard from "./ItemCard";
import { datas } from "../Data";
import { useState } from "react";
import { useBasket } from "./BascketContext";
import { useLikes } from "./LikesContext";
import { useSearch } from "./SearchValue";

function Home() {
  const { addBascket, addNum } = useBasket();
  const { likesArr,addLike } = useLikes();
  const [products, setProducts] = useState(datas);
  const { value } = useSearch();

  const handleBuy = (id: string, title: string, price: number ,imgURL:string) => {
    const targetP = products.find((p) => p.id === id);
    if (!targetP || targetP.quantity <= 0) {
      alert("متأسفانه موجودی این محصول تموم شده!");
      return;
    }

    addBascket({title,price,imgURL});
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    addNum(price);
  };

  const filteredProduct = products.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase().trim())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {filteredProduct.length === 0 ? (
        <div className="alert alert-warning max-w-md mx-auto shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>هیچ محصولی با عنوان «{value}» پیدا نشد!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {filteredProduct.map((product) => {
            const isLiked = likesArr.map((i)=>{
               return i.title
            }).includes(product.title)
            const isOutOfStock = product.quantity <= 0;

            return (
              <ItemCard key={product.id} {...product}>
                <div className="card-actions justify-between items-center w-full mt-4">
                  <button
                    disabled={isOutOfStock}
                    className={`btn btn-sm btn-success text-white ${
                      isOutOfStock ? "btn-disabled" : ""
                    }`}
                    onClick={() =>
                      handleBuy(product.id, product.title, product.price,product.imgURL)
                    }
                  >
                    {isOutOfStock ? "ناموجود" : "خرید محصول"}
                  </button>

                  <button
                    className={`btn btn-sm ${
                      isLiked ? "btn-error text-white" : "btn-outline btn-error"
                    }`}
                    onClick={() => addLike({title:product.title,price:product.price,imgURL:product.imgURL})}
                  >
                    {isLiked ? "❤️ لایک شد" : "🤍 لایک"}
                  </button>
                </div>
              </ItemCard>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;

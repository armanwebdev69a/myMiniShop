interface item {
    title:string,
    id:string,
    quantity:number
    imgURL:string,
    price:number
}

type items = item[]

const datas : items = [
    {
        title:"شلوار",
        price:1200,
        id:crypto.randomUUID(),
        quantity:3,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdbTKZXH4Qos29Cyg0qfi5imY-u8kYFEazok-nU2rgU5gPnyxaLr0oyE&s=10"
    },
    {
        title:"کفش",
        price:2400,
        id:crypto.randomUUID(),
        quantity:5,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69PeWOgKCoVdENFennPVNARW_IVxf8p4z37vpLmYd4g&s=10"
    },
    {
        title:"هودی",
        price:10000,
        id:crypto.randomUUID(),
        quantity:1,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnYXZqPG_Ohp_osp7z6dHRtSZ0ybGw1Ues6JpzMKWzV8ZjBHVKgZHpmVJ&s=10"
    },
    {
        title:"شلوار",
        price:10000,
        id:crypto.randomUUID(),
        quantity:3,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGIDmHxrZFo4fOW37elakrv_qJCo02tD8mv5voDRkR9d74nIdKO8mBuQ&s=10"
    },
    {
        title:"کفش",
        price:2200,
        id:crypto.randomUUID(),
        quantity:5,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0x6z-CJFuzs3uvGpqTt-EeQA8OsO0QtvGNpbh_DmSw&s=10"
    },
    {
        title:"هودی",
        price:100009,
        id:crypto.randomUUID(),
        quantity:1,
        imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0-kIgW3cRZagfMutVNiT9356556cGsGtZNO9BVUGsqnLsrZ7w6KYrZ8w&s=10"
    },
    
]

export {datas }
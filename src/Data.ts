export interface Item {
  id: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
  imgURL: string;
}

export type Items = Item[];

export const datas: Items = [
  {
    id: "prod-1",
    title: "هودی مردانه کلاه‌دار مشکی استایل بیسیک",
    category: "هودی و دورس",
    price: 890000,
    quantity: 4,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/08/top-view-coffee-cup-dark-background-jpg-Top-472x267.jpg"
  },
  {
    id: "prod-2",
    title: "شلوار جین راسته کلاسیک زغالی",
    category: "شلوار",
    price: 750000,
    quantity: 6,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/06/free-forest-road-image-Top-472x267.jpg"
  },
  {
    id: "prod-3",
    title: "کفش پیاده‌روی و رانینگ تنفس‌پذیر سفید",
    category: "کفش",
    price: 1450000,
    quantity: 3,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/06/free-image-of-a-bird-on-a-tree-branch-Top-472x267.jpg"
  },
  {
    id: "prod-4",
    title: "تی‌شرت نخی ساده آستین کوتاه یقه گرد",
    category: "تی‌شرت",
    price: 320000,
    quantity: 10,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/06/free-image-of-young-girl-in-black-and-white-design-Top-472x267.jpg"
  },
  {
    id: "prod-5",
    title: "پیراهن آستین بلند طرح‌دار پاییزه",
    category: "پیراهن",
    price: 680000,
    quantity: 2,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/05/dollar-bill-hand-man-free-Top-472x267.jpg"
  },
  {
    id: "prod-6",
    title: "کاپشن مردانه ضدآب بادگیر زیپ‌دار",
    category: "کاپشن",
    price: 1980000,
    quantity: 1,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/06/free-image-of-a-cup-of-hot-tea-on-a-wooden-table-Top-472x267.jpg"
  },
  {
    id: "prod-7",
    title: "شلوار کتان مردانه راحتی راسته کرم خاکی",
    category: "شلوار",
    price: 820000,
    quantity: 5,
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/05/close-up-cups-tea-Top-472x267.jpg"
  },
  {
    id: "prod-8",
    title: "کلاه بافت زمستانی استایل ساده طوسی",
    category: "اکسسوری",
    price: 190000,
    quantity: 0, // تستی برای وضعیت ناموجود
    imgURL: "https://pikfree.ir/wp-content/uploads/edd/2026/05/cosmetics-lipstick-Top-472x267.jpg"
  }
];

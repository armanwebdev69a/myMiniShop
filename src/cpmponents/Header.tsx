import { useState } from "react";
import { Link } from "react-router-dom";
import type { FormEvent } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Search:", search.trim());
    // بعداً جست‌وجوی واقعی محصولات را اضافه کن.
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111] px-5 py-4 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-xl font-semibold tracking-tight text-white"
        >
          mini<span className="font-normal text-gray-500">shop</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            خانه
          </Link>

          <Link
            to="/likes"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            علاقه‌مندی‌ها
          </Link>

          <Link
            to="/bascket"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            سبد خرید
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <form
            onSubmit={handleSearch}
            className={`flex items-center overflow-hidden rounded-lg border transition-all duration-200 ${
              show
                ? "w-48 border-white/20 bg-white/5 sm:w-64"
                : "w-10 border-transparent"
            }`}
          >
            {show && (
              <input
                dir="rtl"
                type="search"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جست‌وجوی محصول..."
                aria-label="جست‌وجوی محصول"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
              />
            )}

            <button
              type={show ? "submit" : "button"}
              aria-label={show ? "جست‌وجو" : "باز کردن جست‌وجو"}
              onClick={() => {
                if (!show) setShow(true);
                else if (!search.trim()) setShow(false);
              }}
              className="grid size-10 shrink-0 place-items-center text-gray-400 transition hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4 4" />
              </svg>
            </button>
          </form>
        </div>

      </div>

      {/* Mobile navigation */}
      <nav className="mx-auto mt-4 flex max-w-7xl items-center gap-6 border-t border-white/10 pt-3 md:hidden">
        <Link to="/" className="text-sm text-gray-300 hover:text-white">
          خانه
        </Link>
        <Link to="/likes" className="text-sm text-gray-400 hover:text-white">
          علاقه‌مندی‌ها
        </Link>
        <Link to="/basket" className="text-sm text-gray-400 hover:text-white">
          سبد خرید
        </Link>
      </nav>
    </header>
  );
}

export default Header;
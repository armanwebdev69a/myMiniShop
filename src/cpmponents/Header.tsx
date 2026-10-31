import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "./SearchValue";

function Header() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { addValue } = useSearch();

  useEffect(() => {
    addValue(search);
  }, [search, addValue]);

  const handleClose = () => {
    setShow(false);
    setSearch("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-8">
        
        <div className="navbar-start gap-2">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-10 mt-3 w-48 p-2 shadow-lg border border-base-300">
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/likes">علاقه‌مندی‌ها</Link></li>
              <li><Link to="/bascket">سبد خرید</Link></li>
            </ul>
          </div>  

          <Link to="/" className="text-xl font-black tracking-tight text-primary">
            mini<span className="font-normal text-base-content/70">shop</span>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-base font-medium">
            <li><Link to="/" className="hover:text-primary">خانه</Link></li>
            <li><Link to="/likes" className="hover:text-primary">علاقه‌مندی‌ها</Link></li>
            <li><Link to="/bascket" className="hover:text-primary">سبد خرید</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          {show ? (
            <div className="flex items-center gap-1.5 animate-fadeIn">
              <input
                autoFocus
                type="text"
                dir="rtl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="اسم محصول..."
                className="input input-sm sm:input-md input-bordered input-primary w-40 sm:w-64 focus:outline-none"
              />
              <button 
                onClick={handleClose} 
                className="btn btn-ghost btn-circle btn-sm"
                title="بستن جستجو"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShow(true)}
              className="btn btn-ghost btn-circle"
              title="جستجو"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;

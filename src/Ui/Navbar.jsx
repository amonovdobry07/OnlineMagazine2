import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../Companents/HomePage"
import ProductAll from "../Companents/ProductsAll"
import ProductDetail from "../Companents/ProductDetail"
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-black">
        <div className="Logo text-white">
          <Link to="/">
            <h1>Amonoff</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-2.5 text-sm ">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 text-white cursor-pointer hover:text-gray-900">
              Home Page
            </Link>
            <Link to="/product" className="mr-5 text-white cursor-pointer hover:text-gray-900">
              All Products
            </Link>
          </nav>

          <button className="nav-button md:px-10 bg-blue-600 text-black border-transparent hover:border-blue-600 hover:bg-transparent hover:text-white cursor-pointer">
            Log in
          </button>

          <button className="nav-button md:px-10 bg-transparent text-white border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-black cursor-pointer">
            Sign Up
          </button>
        </div>
      </header>
      <Routes>
            <Route path="/" element={<HomePage /> }/>
            <Route path="/product" element={<ProductAll />}/>  
            <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

    

    </>
  );
};

export default Navbar;

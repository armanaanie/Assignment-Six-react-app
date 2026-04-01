import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = ({inCart}) => {
    return (
        <div>
            <div className="navbar bg-white border-b-gray-300 px-15">
  <div className="navbar-start">
   
    <a className="text-2xl font-bold text-violet-950">Digitool</a>
  </div>
  <div className="navbar-center flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Product</a></li>
      <li>
        <a>Feature</a>
      </li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <div className='indicator'><span className={`${inCart.length<=0?"hidden":"indicator-item text-white rounded-full bg-violet-500 font-mono"}`}>{inCart.length}</span>
        <button> <MdOutlineShoppingCart /> </button></div>
    
<a>Login</a>
    <a className="btn rounded-2xl bg-linear-to-r from-violet-950 to-violet-400 text-white">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;